import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";
import { Search2Icon } from "@chakra-ui/icons";

function Search() {
  // const navigate = useNavigate();

  let searchId: any;

  const [searchInput, setSearchInput] = React.useState(String);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/pokemon/name/${searchInput}`)
      .then((response) => {
        searchId = response.data["id"];
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput]);

  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Uh Oh">
      Looks like that pokemon doesn't exist. Make sure to capitalize the first
      initial of their name
    </Popover>
  );

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function toPokemon() {
    if (searchId != null) {
      // navigate(`pokemon/${searchId}`);
    }
  }

  return (
    <Form className="d-flex" onSubmit={toPokemon}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
        value={searchInput}
      />
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={popoverBottom}
      >
        <Button>
          <Search2Icon />
        </Button>
      </OverlayTrigger>
    </Form>
  );
}

export default Search;
