import { useEffect, useState } from "react";
import { ListTypeContainer, ListTypeGameContainer } from "./styles";
import { api } from "../../services/api";
import { Link } from "react-router";

interface Lists {
  id: number;
  name: string;
}

export function ListTypeGame() {
  const [listsType, setListsType] = useState<Lists[]>([]);
  useEffect(() => {
    api.get('/lists')
      .then(response => setListsType(response.data))
  }, []);

  return (  
    <ListTypeGameContainer>
      <h1>Minhas coleções</h1>
      {listsType.map(lists => {
        return (
          <ListTypeContainer key={lists.id}>
            <Link to="/games" className="link-lists">{lists.name}</Link>
          </ListTypeContainer>
        );
      })}
    </ListTypeGameContainer>
  )
}