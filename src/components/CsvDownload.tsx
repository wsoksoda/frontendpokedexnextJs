import { Center, Button } from "@chakra-ui/react";

interface Props {
  data: any;
}

function CsvDownload(props: Props) {
  function createCSV() {
    const headers = [
      "id",
      "name",
      "types",
      "height",
      "weight",
      "abilities",
      "egg_groups",
      "stats",
      "genus",
      "description",
    ];

    const id = props.data.id;
    const name = props.data.name;
    let types = [];

    for (let i = 0; i < props.data.type.length; i++) {
      types[i] = '""' + props.data.type[i].type + '""';
    }
    const height = props.data.height;
    const weight = props.data.weight;
    let abilities = [];

    for (let i = 0; i < props.data.ability.length; i++) {
      abilities[i] = '""' + props.data.ability[i].ability + '""';
    }
    let egg_groups = [];

    for (let i = 0; i < props.data.eggGroup.length; i++) {
      egg_groups[i] = '""' + props.data.eggGroup[i].eggGroup + '""';
    }
    let stats = [
      '"{""hp"": ' + props.data.stats.hp,
      '""speed"": ' + props.data.stats.speed,
      '""attack"": ' + props.data.stats.attack,
      '""defense"": ' + props.data.stats.defense,
      '""specialAttack"": ' + props.data.stats.specialAttack,
      '""specialDefense"": ' + props.data.stats.specialDefense + '}"',
    ];
    const genus = props.data.genus;
    const description = props.data.description;

    const body = [
      id.toString(),
      '"' + name.toString() + '"',
      '"[' + types.toString() + ']"',
      height.toString(),
      weight.toString(),
      '"[' + abilities.toString() + ']"',
      '"[' + egg_groups.toString() + ']"',
      stats.toString(),
      '"' + genus.toString() + '"',
      '"' + description.toString() + '"',
    ];

    const csv = [headers, body].join("\n");

    startDownload(csv);
  }

  function startDownload(input: string) {
    const blob = new Blob([input], { type: "application/csv" });
    const url = URL.createObjectURL(blob);
    const create = document.createElement("a");
    create.download = `${props.data.name}.csv`;
    create.href = url;
    document.body.appendChild(create);
    create.click();
    create.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <Center>
      <Button onClick={createCSV}>Download Pokemon</Button>
    </Center>
  );
}

export default CsvDownload;
