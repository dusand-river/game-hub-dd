import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 75 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14" borderRadius={3} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
