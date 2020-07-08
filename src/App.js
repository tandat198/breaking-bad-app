import React, { useState, Fragment, Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
    Container,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardFooter,
    FormInput,
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from "shards-react";
import axios from "axios";

class App extends Component {
    state = { collapseOpen: false, characters: [] };

    toggleCollapse = () => {
        this.setState({ collapseOpen: !this.state.collapseOpen });
    };
    getAllCharacters = async () => {
        const res = await axios.get("https://breakingbadapi.com/api/characters");
        this.setState({ characters: res.data });
    };
    hideCharacter = (char_id) => {
        const filterCharacter = this.state.characters.filter((character) => character.char_id !== char_id);
        this.setState({ characters: filterCharacter });
    };

    componentDidMount() {
        this.getAllCharacters();
    }
    render() {
        const { collapseOpen, characters } = this.state;
        return (
            <Fragment>
                <Navbar type='dark' theme='dark' expand='md'>
                    <Container>
                        <NavbarBrand href='/' className='text-success'>
                            Breaking Bad
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleCollapse} />
                        <Collapse open={collapseOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href='/' className='text-success'>
                                        Characters
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='text-success'>
                                        Episodes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='text-success'>
                                        Quotes
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>

                {/* HomePage */}
                <div className='bg-secondary py-5'>
                    <Container>
                        <form className='d-flex'>
                            <FormInput invalid placeholder='Search character by name' />
                            <Button theme='success' className='ml-3 w-25' type='submit'>
                                Search
                            </Button>
                        </form>
                        <div className='d-flex flex-wrap mt-4 text-center'>
                            {characters.map((character) => (
                                <Card className='position-relative bg-dark' key={character.char_id}>
                                    <div className='overlay'></div>
                                    <CardImg top src={character.img} />
                                    <CardBody className='text-success'>{character.name}</CardBody>
                                    <div className='position-absolute w-100 hide-btn-wp'>
                                        <Button pill theme='success' className='mb-2'>
                                            More Details
                                        </Button>
                                        <Button
                                            pill
                                            outline
                                            theme='danger'
                                            onClick={() => this.hideCharacter(character.char_id)}
                                        >
                                            Hide Character
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </div>

                {/* EpisodesPage */}
                <div className='bg-secondary py-5'>
                    <Container>
                        <Card className='position-relative bg-dark'>
                            <CardBody>
                                <CardTitle className='text-success'>Ozymandias</CardTitle>
                                <p className='text-light'>Season: 5</p>
                                <p className='text-light'>Episode: 14</p>
                                <p className='text-light'>Characters: Walter White, Jesse Pinkman, Skyler White</p>
                                <Button outline theme='success'>
                                    Read more &rarr;
                                </Button>
                            </CardBody>
                            <CardFooter className='text-light'>Air Date: 09-15-2013</CardFooter>
                        </Card>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default App;
