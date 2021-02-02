import { v4 as uuid } from 'uuid';

let reviews = [
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Emily Everyone",
        reviewerAvatar: "",
        rating: 5,
        quote: "Wait... was this real? I feel like a dream-version of myself."
    },
    {
        reviewerName: "Kathy Kickasser",
        reviewerAvatar: "",
        rating: 5,
        quote: "I thought Emily's programs were insightful, REAL, and she really gave me the attention I needed to reach every single one of my goals! Thank you!"
    },
    {
        reviewerName: "Helen Heckler",
        reviewerAvatar: "",
        rating: 5,
        quote: "Before: I hated my periods. Now: I feel empowered to let my body do what it actually wants to, and build up my physical strength at the same time!"
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    },
    {
        reviewerName: "Sarah Somebody",
        reviewerAvatar: "",
        rating: 5,
        quote: "OMG I can't even believe how awesome this has been. I feel AMAZING."
    }
]

reviews.map(review => {
    review.id = uuid();
    return review;
})

export default reviews;