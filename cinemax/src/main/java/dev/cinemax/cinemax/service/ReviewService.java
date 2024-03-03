package dev.cinemax.cinemax.service;

import dev.cinemax.cinemax.entity.Movies;
import dev.cinemax.cinemax.entity.Reviews;
import dev.cinemax.cinemax.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;


    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Reviews> allReviews(){
        return reviewRepository.findAll();
    }
    public Reviews createReview(String reviewBody, String imdbId) {
        Reviews review = reviewRepository.insert(new Reviews(reviewBody, imdbId));

        mongoTemplate.update(Movies.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review.getId()))
                .first();
        return review;
    }

    public List<Reviews> getReviewsByImdbId(String imdbId) {
        return reviewRepository.findByImdbId(imdbId);
    }
}
