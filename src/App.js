import React, { useState, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
    Container,
    Card,
    CardBody,
    CardImg,
    CardHeader,
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

function App() {
    const [collapseOpen, setCollapseOpen] = useState(false);
    const characters = [
        {
            char_id: 1,
            name: "Walter White",
            birthday: "09-07-1958",
            occupation: ["High School Chemistry Teacher", "Meth King Pin"],
            img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
            status: "Presumed dead",
            nickname: "Heisenberg",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Bryan Cranston",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 2,
            name: "Jesse Pinkman",
            birthday: "09-24-1984",
            occupation: ["Meth Dealer"],
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg",
            status: "Alive",
            nickname: "Cap n' Cook",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Aaron Paul",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 3,
            name: "Skyler White",
            birthday: "08-11-1970",
            occupation: ["House wife", "Book Keeper", "Car Wash Manager", "Taxi Dispatcher"],
            img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
            status: "Alive",
            nickname: "Sky",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Anna Gunn",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 4,
            name: "Walter White Jr.",
            birthday: "07-08-1993",
            occupation: ["Teenager"],
            img:
                "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
            status: "Alive",
            nickname: "Flynn",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "RJ Mitte",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 5,
            name: "Henry Schrader",
            birthday: "Unknown",
            occupation: ["DEA Agent"],
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Hank_Schrader2.jpg/220px-Hank_Schrader2.jpg",
            status: "Deceased",
            nickname: "Hank",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Dean Norris",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 6,
            name: "Marie Schrader",
            birthday: "Unknown",
            occupation: ["Housewife", "Clepto"],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
            status: "Alive",
            nickname: "Marie",
            appearance: [1, 2, 3, 4, 5],
            portrayed: "Betsy Brandt",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
        {
            char_id: 7,
            name: "Mike Ehrmantraut",
            birthday: "Unknown",
            occupation: ["Hitman", "Private Investigator", "Ex-Cop"],
            img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
            status: "Deceased",
            nickname: "Mike",
            appearance: [2, 3, 4, 5],
            portrayed: "Jonathan Banks",
            category: "Breaking Bad, Better Call Saul",
            better_call_saul_appearance: [1, 2, 3, 4],
        },
        {
            char_id: 8,
            name: "Saul Goodman",
            birthday: "Unknown",
            occupation: ["Lawyer"],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
            status: "Alive",
            nickname: "Jimmy McGill",
            appearance: [2, 3, 4, 5],
            portrayed: "Bob Odenkirk",
            category: "Breaking Bad, Better Call Saul",
            better_call_saul_appearance: [1, 2, 3, 4],
        },
        {
            char_id: 9,
            name: "Gustavo Fring",
            birthday: "Unknown",
            occupation: ["Los-Pollos co-Founder", "Philanthropist", "Cartel Leader"],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
            status: "Deceased",
            nickname: "Gus",
            appearance: [2, 3, 4],
            portrayed: "Giancarlo Esposito",
            category: "Breaking Bad, Better Call Saul",
            better_call_saul_appearance: [3, 4],
        },
        {
            char_id: 10,
            name: "Hector Salamanca",
            birthday: "Unknown",
            occupation: ["Former Senior Cartel Leader"],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
            status: "Deceased",
            nickname: "Don Hector",
            appearance: [1, 2, 3, 4],
            portrayed: "Mark Margolis",
            category: "Breaking Bad, Better Call Saul",
            better_call_saul_appearance: [2, 3, 4],
        },
        {
            char_id: 11,
            name: "Domingo Molina",
            birthday: "Unknown",
            occupation: ["Meth Distributor"],
            img: "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
            status: "Deceased",
            nickname: "Krazy-8",
            appearance: [1],
            portrayed: "Maximino Arciniega",
            category: "Breaking Bad",
            better_call_saul_appearance: [],
        },
    ];
    const toggleCollapse = () => {
        setCollapseOpen(!collapseOpen);
    };
    return (
        <Fragment>
            <Navbar type='dark' theme='dark' expand='md'>
                <Container>
                    <NavbarBrand href='/' className='text-success'>
                        Breaking Bad
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleCollapse} />
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
                            <Card className='position-relative bg-dark'>
                                <div className='overlay'></div>
                                <CardImg top src={character.img} />
                                <CardBody className='text-success'>{character.name}</CardBody>
                                <div className='position-absolute w-100 hide-btn-wp'>
                                    <Button pill theme='success' className='mb-2'>
                                        More Details
                                    </Button>
                                    <Button pill outline theme='danger'>
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

export default App;
