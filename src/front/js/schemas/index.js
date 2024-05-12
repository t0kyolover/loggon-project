import * as yup from "yup";

export const postDealSchema = yup.object().shape({
  image_url: yup.string().required("Image URL is required"),
  game_title: yup.string().required("Game title is required"),
//   platform: "PC",
//   type: "Game",
//   format: "Digital",
  original_price: yup.number().positive().integer().required("Original price is required"),
  offer_price: yup.number().positive().integer().required("Offer price is required"),
  expiration_date: yup.date(),
  promo_code: yup.string(),
  offer_link: yup.string().required("Offer link is required"),
//   scheduled_date: yup.date(),
//   scheduled_time: yup.time(),
//   scheduled: false,
//   rating: 0,
});
