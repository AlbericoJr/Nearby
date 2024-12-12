import { FlatList } from "react-native";
import { Category } from "../category";

import { styles } from "./styles";

export type CategoriesProps = {
  id: string;
  name: string;
} []

type Props = {
  data: CategoriesProps
  selected: string
  onSelect: (id: string) => void
}

export function Categories({data, selected, onSelect}: Props){
  return(
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => ( 
        <Category 
          name={item.item.name} 
          iconId={item.item.id} 
          onPress={() => onSelect(item.item.id)}
          isSelected={item.item.id === selected}
          />
        )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )
}