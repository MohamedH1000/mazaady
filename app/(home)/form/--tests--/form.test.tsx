// app/(home)/form/--tests--/form.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "../page"; // Import the page
import axios from "axios";

// Mock axios
jest.mock("axios");

const mockCategories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
];

const mockSubcategories = [
  { id: 1, name: "Subcategory 1", properties: [] },
  { id: 2, name: "Subcategory 2", properties: [] },
];

describe("Page", () => {
  beforeEach(() => {
    // Mock API responses
    (axios.get as jest.Mock).mockImplementation((url) => {
      if (url.includes("all-categories")) {
        return Promise.resolve({
          data: { data: { categories: mockCategories } },
        });
      } else if (url.includes("properties")) {
        return Promise.resolve({ data: { data: mockSubcategories } });
      }
      return Promise.reject(new Error("Not found"));
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the main category dropdown", async () => {
    render(<Page />);

    // Wait for the categories to load
    await waitFor(() => {
      expect(screen.getByLabelText("Main Category")).toBeInTheDocument();
    });

    // Check if categories are rendered
    mockCategories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument();
    });
  });

  it("renders the subcategory dropdown when a main category is selected", async () => {
    render(<Page />);

    // Wait for the categories to load
    await waitFor(() => {
      expect(screen.getByLabelText("Main Category")).toBeInTheDocument();
    });

    // Select a main category
    fireEvent.change(screen.getByLabelText("Main Category"), {
      target: { value: mockCategories[0].id },
    });

    // Wait for the subcategories to load
    await waitFor(() => {
      expect(screen.getByLabelText("Subcategory")).toBeInTheDocument();
    });

    // Check if subcategories are rendered
    mockSubcategories.forEach((subcategory) => {
      expect(screen.getByText(subcategory.name)).toBeInTheDocument();
    });
  });
});
