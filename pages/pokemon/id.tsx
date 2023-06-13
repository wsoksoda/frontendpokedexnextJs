import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/navbar";
import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { PokemonChart } from "@/pokemonChart";
import BackButton from "@/backButton";
import { statColor } from "@/pokemonInterface";
import { useRouter } from "next/router";

function Pokemon() {
  let thisPokemon = {} as pokemon;
  let thisStat = {} as stat;
  let thisAbility = {} as pokemon["ability"];
  let thisEggGroup = {} as pokemon["eggGroup"];

  const [post, setPost] = React.useState(thisPokemon);
  const [stats, setStats] = React.useState(thisStat);
  const [ability, setAbility] = React.useState(thisAbility);
  const [eggGroup, setEggGroup] = React.useState(thisEggGroup);

  let router = useRouter();

  const id = parseInt((router.query.id as string) ?? "1");

  const pokemonSize = 553;

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon/${id}`)
      .then((response) => {
        setPost(response.data);
        setStats(response.data["stats"]);
        setAbility(response.data["abilty"]);
        setEggGroup(response.data["eggGroup"]);
        console.log(post);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  function next(): void {
    if (id < pokemonSize) {
      let currentPage = id + 1;
      router.push(`/pokemon/?id=${currentPage}`);
    }
  }

  function back(): void {
    if (id > 1) {
      let currentPage = id - 1;
      router.push(`/pokemon/?id=${currentPage}`);
    }
  }

  return (
    <div className="body">
      <Navbar goBack={back} goForward={next} />
      <Card
        style={{
          width: "50rem",
          display: "block",
          margin: "auto",
          marginTop: "2rem",
          marginBottom: "10rem",
        }}
      >
        <CardBody>
          <CardHeader>
            {/* <Link to={`/${pageable}`}>
              <BackButton />
            </Link> */}
            <div className="display">
              {post.type?.map((type, typeIndex) => (
                <Text
                  style={{
                    width: "5rem",
                    backgroundColor: statColor[type.type],
                    display: "block",
                    float: "left",
                    marginLeft: "1rem",
                    paddingTop: ".25rem",
                    textAlign: "center",
                    height: "2rem",
                    borderRadius: "1rem",
                    marginTop: ".5rem",
                  }}
                  key={typeIndex}
                >
                  {type.type}
                </Text>
              ))}
            </div>
          </CardHeader>
          <div className="display">
            <Image
              style={{ maxWidth: "20rem" }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${post.id}.png`}
            ></Image>
            <div className="centerText">
              <div className="display">
                <h3>Height: {post.height} </h3>
                <p> &nbsp; M</p>
              </div>
              <div className="display">
                <h3>Weight: {post.weight} </h3>

                <p> &nbsp; Kg</p>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <h3>Abilities:</h3>
                {post.ability?.map((ability: abilityInterface, index) => (
                  <h3 key={index}>&emsp;{ability.ability}</h3>
                ))}
                <h3>Egg Groups:</h3>
                {post.eggGroup?.map((eggGroup: eggGroupInterface, index) => (
                  <h3 key={index}>&emsp;{eggGroup.eggGroup}</h3>
                ))}
              </div>
            </div>
          </div>
          <PokemonChart
            id={stats.id}
            hp={stats.hp}
            attack={stats.attack}
            defense={stats.defense}
            speed={stats.speed}
            specialAttack={stats.specialAttack}
            specialDefense={stats.specialDefense}
          ></PokemonChart>
          <Text>
            <h3>{post.genus}</h3>
            <p>{post.description}</p>
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default Pokemon;
