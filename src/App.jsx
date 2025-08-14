
import React, { useState, useEffect } from "react";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { data } from "./utils/data";

const pinkTheme = extendTheme({
  colors: {
    brand: {
      50: '#ffe4f7',
      100: '#ffb3de',
      200: '#ff80c6',
      300: '#ff4eae',
      400: '#ff1b96',
      500: '#e6007a',
      600: '#b4005e',
      700: '#820042',
      800: '#510026',
      900: '#21000a',
    },
    pink: {
      50: '#ffe4f7',
      100: '#ffb3de',
      200: '#ff80c6',
      300: '#ff4eae',
      400: '#ff1b96',
      500: '#e6007a',
      600: '#b4005e',
      700: '#820042',
      800: '#510026',
      900: '#21000a',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: 'pink.400',
          color: 'white',
          _hover: { bg: 'pink.500' },
        },
      },
    },
    Badge: {
      baseStyle: {
        colorScheme: 'pink',
      },
    },
  },
});

function App() {
  useEffect(() => {
    document.body.style.background = "#ffe4f7";
    return () => {
      document.body.style.background = "";
    };
  }, []);
  const [selectedRecipeLabel, setSelectedRecipeLabel] = useState(null);

  const handleSelectRecipe = (label) => {
    setSelectedRecipeLabel(label);
  };

  const handleBack = () => {
    setSelectedRecipeLabel(null);
  };

  const selectedRecipe = data.hits.find(
    (hit) => hit.recipe.label === selectedRecipeLabel
  );

  return (
    <ChakraProvider theme={pinkTheme}>
      <Box maxW="900px" mx="auto" p={4} bg="pink.50" minH="100vh">
        {!selectedRecipeLabel ? (
          <RecipeListPage
            recipes={data.hits}
            onSelectRecipe={handleSelectRecipe}
          />
        ) : (
          <RecipePage recipe={selectedRecipe.recipe} onBack={handleBack} />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
