import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders",() => {
  const {getByText} = render(<CheckoutForm />);
    expect(getByText("Checkout Form")).toBeTruthy()
});

test("form shows success message on submit with form details",async () => {
  const {getByTestId} = render(<CheckoutForm />);
  await waitFor(() => {
    fireEvent.input(getByTestId("firstName"), "Adam")
    fireEvent.input(getByTestId("lastName"), "Young")
    fireEvent.input(getByTestId("address"), "123465 south amber drive")
    fireEvent.input(getByTestId("city"), "charlotte town")
    fireEvent.input(getByTestId("state"), "Fl")
    fireEvent.input(getByTestId("zip"), "45248")
    fireEvent.click(getByTestId("Checkout"))
  });
  expect(getByTestId("successMessage")).toBeTruthy()
});
