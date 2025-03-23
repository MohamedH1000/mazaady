"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define types
interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  name: string;
  type: string;
  parent_id: number | null;
  options: Option[];
}

interface Option {
  id: number;
  name: string;
  properties?: Property[]; // Nested properties inside options
}

interface Property {
  id: number;
  name: string;
  options: Option[];
}

// Fetch main categories
const fetchCategories = async (): Promise<{
  data: { categories: Category[] };
}> => {
  try {
    const response = await axios.get(
      "https://stagingapi.mazaady.com/api/v1/all-categories/web",
      {
        headers: {
          "content-language": "en",
          Accept: "application/json",
          "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
          platform: "Postman",
          currency: "AED",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Fetch subcategories
const fetchSubcategories = async (
  categoryId: number
): Promise<{ data: Subcategory[] }> => {
  try {
    const response = await axios.get(
      `https://stagingapi.mazaady.com/api/v1/properties/${categoryId}`,
      {
        headers: {
          "content-language": "en",
          Accept: "application/json",
          "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
          platform: "Postman",
          currency: "AED",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
};

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(
    null
  );
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<
    Record<number, string>
  >({});
  const [showTable, setShowTable] = useState<boolean>(false);

  // Fetch main categories
  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data.data.categories))
      .catch((error) => console.error(error));
  }, []);

  // Fetch subcategories when a main category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetchSubcategories(selectedCategory)
        .then((data) => setSubcategories(data.data))
        .catch((error) => console.error(error));
    }
  }, [selectedCategory]);

  // Handle main category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(e.target.value);
    setSelectedCategory(categoryId);
    setSelectedSubcategory(null);
    setProperties([]);
    setSelectedProperties({});
  };

  // Handle subcategory selection
  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subcategoryId = parseInt(e.target.value);
    setSelectedSubcategory(subcategoryId);
    const subcategory = subcategories.find((sub) => sub.id === subcategoryId);

    // If the subcategory has options, treat them as properties
    if (subcategory?.options) {
      setProperties(
        subcategory.options.map((option) => ({
          id: option.id,
          name: option.name,
          options: option.properties || [], // Use nested properties if available
        }))
      );
    } else {
      setProperties([]);
    }

    setSelectedProperties({});
  };

  // Handle property selection
  const handlePropertyChange = (propertyId: number, value: string) => {
    setSelectedProperties((prev) => ({
      ...prev,
      [propertyId]: value,
    }));

    // Check if the selected option has nested properties
    const selectedProperty = properties.find((prop) => prop.id === propertyId);
    const selectedOption = selectedProperty?.options.find(
      (opt) => opt.id === parseInt(value)
    );

    if (selectedOption?.properties) {
      // Add nested properties to the properties list
      setProperties((prev) => [...prev, ...selectedOption.properties]);
    }
  };

  // Handle "Other" option
  const handleOtherInputChange = (propertyId: number, value: string) => {
    setSelectedProperties((prev) => ({
      ...prev,
      [propertyId]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTable(true);
  };

  return (
    <div className="bg-[#F6F4F5] min-h-screen px-[100px] pt-13 flex items-start justify-center gap-5 max-md:flex-col max-md:items-center max-md:px-5">
      <div className="w-full flex flex-col items-start justify-start max-md:items-center">
        <form onSubmit={handleSubmit}>
          {/* Main Category Dropdown */}
          <div className="mb-4">
            <label htmlFor="mainCategory" className="block mb-2">
              Main Category
            </label>
            <select
              id="mainCategory"
              value={selectedCategory || ""}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Dropdown */}
          {selectedCategory && (
            <div className="mb-4">
              <label htmlFor="subcategory" className="block mb-2">
                Subcategory
              </label>
              <select
                id="subcategory"
                value={selectedSubcategory || ""}
                onChange={handleSubcategoryChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Property Dropdowns */}
          {selectedSubcategory &&
            properties.map((property) => (
              <div key={property.id} className="mb-4">
                <label
                  htmlFor={`property-${property.id}`}
                  className="block mb-2"
                >
                  {property.name}
                </label>
                <select
                  id={`property-${property.id}`}
                  value={selectedProperties[property.id] || ""}
                  onChange={(e) =>
                    handlePropertyChange(property.id, e.target.value)
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select an option</option>
                  {property.options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>

                {/* Input field for "Other" option */}
                {selectedProperties[property.id] === "other" && (
                  <input
                    type="text"
                    placeholder="Enter custom value"
                    onChange={(e) =>
                      handleOtherInputChange(property.id, e.target.value)
                    }
                    className="w-full p-2 border rounded mt-2"
                  />
                )}

                {/* Render nested properties if the selected option has them */}
                {property.options
                  .find(
                    (opt) =>
                      opt.id === parseInt(selectedProperties[property.id])
                  )
                  ?.properties?.map((nestedProperty) => (
                    <div key={nestedProperty.id} className="ml-4 mt-2">
                      <label
                        htmlFor={`property-${nestedProperty.id}`}
                        className="block mb-2"
                      >
                        {nestedProperty.name}
                      </label>
                      <select
                        id={`property-${nestedProperty.id}`}
                        value={selectedProperties[nestedProperty.id] || ""}
                        onChange={(e) =>
                          handlePropertyChange(
                            nestedProperty.id,
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select an option</option>
                        {nestedProperty.options.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </select>

                      {/* Input field for "Other" option */}
                      {selectedProperties[nestedProperty.id] === "other" && (
                        <input
                          type="text"
                          placeholder="Enter custom value"
                          onChange={(e) =>
                            handleOtherInputChange(
                              nestedProperty.id,
                              e.target.value
                            )
                          }
                          className="w-full p-2 border rounded mt-2"
                        />
                      )}
                    </div>
                  ))}
              </div>
            ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#D20653] text-white p-2 rounded cursor-pointer"
          >
            Submit
          </button>
        </form>

        {/* Display Selected Key-Value Pairs */}
        {showTable && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Selected Properties</h2>
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Property</th>
                  <th className="p-2 border">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedProperties).map(([key, value]) => {
                  const property = properties.find(
                    (prop) => prop.id === parseInt(key)
                  );
                  const propertyName = property
                    ? property.name
                    : `Property ${key}`;
                  return (
                    <tr key={key} className="border">
                      <td className="p-2 border">{propertyName}</td>
                      <td className="p-2 border">{value}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
