// Manually pulled from Jandy's public TruClear product page on 2026-08-28,
// while we wait on an official Birdeye widget/API from Jandy. This is a
// one-time snapshot (most recent 12 of 116) and will NOT auto-update —
// replace this file (or wire up the real integration) once Jandy responds.
// Source: https://www.jandy.com/en/products/water-care/salt-chlorinators/truclear
export const jandyReviewSummary = {
  averageRating: 4.8,
  totalReviews: 116,
  sourceUrl: "https://www.jandy.com/en/products/water-care/salt-chlorinators/truclear",
};

export type JandyReview = {
  name: string;
  rating: number;
  comment: string;
  date: string; // ISO date
};

export const jandyTruclearReviews: JandyReview[] = [
  {
    name: "Jacob Relation",
    rating: 5,
    comment:
      "Works great! Easier maintenance on my pool and feels more naturally clean.",
    date: "2026-08-25",
  },
  {
    name: "James Warner",
    rating: 5,
    comment: "Works great",
    date: "2026-08-25",
  },
  {
    name: "Sherry Smith",
    rating: 5,
    comment: "Works great.",
    date: "2026-08-22",
  },
  {
    name: "Joseph Bilik",
    rating: 5,
    comment:
      "Skilled installer, explained the features and benefits of the TruClear System over other systems.",
    date: "2026-08-12",
  },
  {
    name: "David Crofoot",
    rating: 5,
    comment: "No issues. Works fine",
    date: "2026-08-09",
  },
  {
    name: "Leo Torres",
    rating: 3,
    comment:
      "While the small design of the salt cell is aesthetically pleasing, it get clogged and dirty fast cause the cell to not produce salt enough for my application. My pool is not covered and grass clippings and dirt get inside regularly. My filter is in good shape but small grass clippings or dog hair get trapped in the salt cell causing the system not produce chlorine even while there is plenty of water flow. It's gonna be a hassle having to clean it out often to keep my chlorine output steady.",
    date: "2026-08-01",
  },
  {
    name: "Robert Frick",
    rating: 5,
    comment:
      "Easy to adjust the chlorination lever. Much better design for cleaning than other manufacturers",
    date: "2026-07-29",
  },
  {
    name: "Heather Cromer",
    rating: 5,
    comment: "Salt levels have been good",
    date: "2026-07-29",
  },
  {
    name: "Alejandro Garcia",
    rating: 3,
    comment:
      "The chlorinator cell stop working after 2.5 years. Fortunately was still under warranty and it was replaced. But sad to hear that this equipment doesn't last more than 2-3 years. This is expensive equipment and should last longer than that or have a larger warranty time. I like the brand and the performance but not something that last so short",
    date: "2026-07-28",
  },
  {
    name: "Sandy Stone",
    rating: 5,
    comment:
      "Price was reasonable. Installation was straightforward. Great results keeping the pool clean and water feeling so much better than as a traditional chlorine pool. And no more buying chlorine tabs!!",
    date: "2026-07-27",
  },
  {
    name: "Joan Sheorn",
    rating: 5,
    comment: "No problems so far. Have had my pool about a month.",
    date: "2026-07-08",
  },
  {
    name: "Steve Renner",
    rating: 5,
    comment:
      "Great customer service when I contacted Jandy about my questions on whether my new salt cell was performing properly. All issues were resolved promptly!",
    date: "2026-07-02",
  },
];
