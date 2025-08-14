import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Stack,
  Button,
  List,
  ListItem,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

function RecipePage({ recipe, onBack }) {
  if (!recipe) return null;

  const nutrients = recipe.totalNutrients;

  return (
    <Box>
      <Button mb={4} onClick={onBack}>← Back</Button>
      <SimpleGrid columns={[1, 2]} spacing={6}>
        <Image src={recipe.image} alt={recipe.label} borderRadius="lg" />
        <Box>
          <Text fontWeight="bold" fontSize="2xl">{recipe.label}</Text>
          <Stack direction="row" mt={2} wrap="wrap">
            {recipe.dietLabels.map((dl) => (
              <Badge key={dl} colorScheme="green">{dl}</Badge>
            ))}
            {recipe.cautions.map((c) => (
              <Badge key={c} colorScheme="red">{c}</Badge>
            ))}
          </Stack>
          <Text mt={2}>Meal type: {recipe.mealType?.join(", ")}</Text>
          <Text>Dish type: {recipe.dishType?.join(", ")}</Text>
          <Text>Cooking time: {recipe.totalTime} min</Text>
          <Text>Servings: {recipe.yield}</Text>
          <Divider my={2} />
          <Text fontWeight="bold">Health labels:</Text>
          <Stack direction="row" wrap="wrap">
            {recipe.healthLabels.map((hl) => (
              <Badge key={hl} colorScheme="blue">{hl}</Badge>
            ))}
          </Stack>
          <Divider my={2} />
          <Text fontWeight="bold">Ingredients:</Text>
          <List>
            {recipe.ingredientLines.map((ing, idx) => (
              <ListItem key={idx}>{ing}</ListItem>
            ))}
          </List>
          <Divider my={2} />
          <Text fontWeight="bold">Nutrients:</Text>
          <List>
            <ListItem>Energy: {nutrients.ENERC_KCAL?.quantity?.toFixed(0)} kcal</ListItem>
            <ListItem>Protein: {nutrients.PROCNT?.quantity?.toFixed(1)} g</ListItem>
            <ListItem>Fat: {nutrients.FAT?.quantity?.toFixed(1)} g</ListItem>
            <ListItem>Carbs: {nutrients.CHOCDF?.quantity?.toFixed(1)} g</ListItem>
            <ListItem>Cholesterol: {nutrients.CHOLE?.quantity?.toFixed(1)} mg</ListItem>
            <ListItem>Sodium: {nutrients.NA?.quantity?.toFixed(1)} mg</ListItem>
          </List>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default RecipePage;
