import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {

    it("Should test whether Contact Component screen is laoding", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    it("Should check whether their is name box in Contact Component", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("name");
        const labelname = screen.getByLabelText("UserName :");

        expect(labelname).toBeInTheDocument();
    })

    it("should rendered a button in Contact Component", () => {
        render(<Contact></Contact>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })

    it("should test whether their are two input box in Contact Component", () => {
        render(<Contact />);
        const inputBox = screen.getAllByRole("textbox");
        expect(inputBox.length).toBe(2);
    })

})

