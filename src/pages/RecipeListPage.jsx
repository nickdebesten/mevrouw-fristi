
import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  SimpleGrid,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

function normalize(str) {
  return str.toLowerCase().replace(/[-_ ]/g, "").replace(/s$/, "");
}

function filterRecipes(recipes, query) {
  if (!query) return recipes;
  const q = normalize(query);
  return recipes.filter((hit) => {
    const { label, healthLabels, cautions } = hit.recipe;
    const hasCautions = cautions && cautions.length > 0;
    const allCautions = hasCautions ? cautions.map(c => normalize(c)) : ["none"];
    // If query matches any caution, only show those recipes
    if (allCautions.includes(q)) {
      return true;
    }
    // Otherwise, match label or healthLabels
    return (
      label.toLowerCase().includes(query.toLowerCase()) ||
      healthLabels.some((hl) => hl.toLowerCase().includes(query.toLowerCase()))
    );
  });
}

function RecipeListPage({ recipes, onSelectRecipe }) {
  const [search, setSearch] = useState("");

  const filtered = filterRecipes(recipes, search);

  return (
    <Box>
      <Stack mb={4} direction="row">
        <Input
          placeholder="Search by name or health label..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          focusBorderColor="pink.500"
          bg="pink.200"
          color="pink.900"
          borderColor="pink.400"
          borderWidth={2}
          fontWeight="bold"
          _placeholder={{ color: "pink.500" }}
        />
        <Button colorScheme="pink" bg="pink.400" _hover={{ bg: "pink.500" }} onClick={() => setSearch("")}>Clear</Button>
      </Stack>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filtered.map((hit) => {
          const r = hit.recipe;
          return (
            <Box
              key={r.label}
              borderWidth="3px"
              borderColor="pink.400"
              borderRadius="2xl"
              overflow="hidden"
              cursor="pointer"
              onClick={() => onSelectRecipe(r.label)}
              boxShadow="xl"
              bg="white"
              transition="all 0.2s"
              _hover={{ boxShadow: "2xl", borderColor: "pink.500", transform: "scale(1.03)", zIndex: 1 }}
            >
              <Image src={r.image} alt={r.label} w="100%" h="180px" objectFit="cover" borderTopRadius="2xl" />
              <Box p={4}>
                <Text fontWeight="extrabold" fontSize="lg" color="pink.600">{r.label}</Text>
                <Stack direction="row" mt={2} wrap="wrap">
                  {r.dietLabels.map((dl) => (
                    <Badge key={dl} colorScheme="pink">{dl}</Badge>
                  ))}
                </Stack>
                <Text mt={2} fontWeight="bold" color="pink.700">Cautions:</Text>
                <Stack direction="row" wrap="wrap" mb={2}>
                  {r.cautions.map((c) => (
                    <Badge key={c} colorScheme="red">{c}</Badge>
                  ))}
                  {r.cautions.length === 0 && (
                    <Text color="pink.400" fontSize="sm">None</Text>
                  )}
                </Stack>
                <Text mt={2} color="pink.500">Meal type: {r.mealType?.join(", ")}</Text>
                <Text color="pink.500">Dish type: {r.dishType?.join(", ")}</Text>
                <Stack direction="row" mt={2}>
                  {r.healthLabels.includes("Vegan") && (
                    <Badge colorScheme="pink">Vegan</Badge>
                  )}
                  {r.healthLabels.includes("Vegetarian") && (
                    <Badge colorScheme="pink">Vegetarian</Badge>
                  )}
                </Stack>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default RecipeListPage;
