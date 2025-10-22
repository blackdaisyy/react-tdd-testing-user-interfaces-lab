import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Enables toBeInTheDocument, toHaveAttribute, etc.
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of the user with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text About Me", () => {
  render(<App />);
  const subheading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subheading).toBeInTheDocument();
});

test("displays a paragraph with a biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i'm a web developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("includes a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("includes a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
