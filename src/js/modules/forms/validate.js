import { feedbackForm } from "./feedback-form.js";

export const validate = () => {
  feedbackForm(".js-form");
  feedbackForm(".js-form-modal");
};