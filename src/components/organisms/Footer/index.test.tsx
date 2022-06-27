import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  it("image", () => {
    render(<Footer />);
    const element = screen.getByRole("img");
    expect(element).toHaveAttribute("src", "images/Blinklist 1.png");
  });

  it("text", () => {
    render(<Footer />);
    const element = screen.getByText(
      "Big ideas in small packages Start learnign now"
    );
    expect(element).toBeInTheDocument();
  });

  it("Editorial", () => {
    render(<Footer />);
    const element1 = screen.getByText("Editorial");
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText("Book lists");
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByText("What is Nonfiction?");
    expect(element3).toBeInTheDocument();
    const element4 = screen.getByText("What to read next?");
    expect(element4).toBeInTheDocument();
    const element5 = screen.getByText("Benefits of reading");
    expect(element5).toBeInTheDocument();
  });

  it("Useful Links", () => {
    render(<Footer />);
    const element1 = screen.getByText("Useful links");
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText("Pricing");
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByText("Blinkist business");
    expect(element3).toBeInTheDocument();
    const element4 = screen.getByText("Gift cards");
    expect(element4).toBeInTheDocument();
    const element5 = screen.getByText("Blinkist magaine");
    expect(element5).toBeInTheDocument();
    const element6 = screen.getByText("Contact & help");
    expect(element6).toBeInTheDocument();
  });

  it("Company", () => {
    render(<Footer />);
    const element1 = screen.getByText("Company");
    expect(element1).toBeInTheDocument();
    const element2 = screen.getByText("About");
    expect(element2).toBeInTheDocument();
    const element3 = screen.getByText("Careers");
    expect(element3).toBeInTheDocument();
    const element4 = screen.getByText("partners");
    expect(element4).toBeInTheDocument();
    const element5 = screen.getByText("Code of Conduct");
    expect(element5).toBeInTheDocument();
  });

  it("sitemap", () => {
    render(<Footer />);
    const element = screen.getByText(
      "© Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies"
    );
    expect(element).toBeInTheDocument();
  });
});
