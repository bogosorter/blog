import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Cover from './components/Cover';
import Post from './components/Post';
import Image from './components/Image';
import Metadata from './components/Metadata';
import Separator from './components/Separator';
import Fullscreen from './components/Fullscreen';
import Reference from './components/Reference';

import ametade from './images/ametade.jpg';
import arrifana from './images/arrifana.jpg';
import blocks from './images/blocks.jpg';
import blood from './images/blood.jpg';
import bridge from './images/bridge.jpg';
import cannon from './images/cannon.jpg';
import cave from './images/cave.jpg';
import cemetery from './images/cemetery.jpg';
import chestnuts from './images/chestnuts.jpg';
import clouds from './images/clouds.jpg';
import construction from './images/construction.jpg';
import contrast from './images/contrast.jpg';
import cpu from './images/cpu.png';
import dawn from './images/dawn.jpg';
import feup from './images/feup.jpg';
import gaspar from './images/gaspar.jpg';
import graffiti from './images/graffiti.jpg';
import grave from './images/grave.jpg';
import headphones from './images/headphones.jpg';
import herbs from './images/herbs.jpg';
import lebkuchen from './images/lebkuchen.jpg';
import mail from './images/mail.jpg';
import math from './images/math.jpg';
import mikra from './images/mikra.jpg';
import moledo from './images/moledo.jpg';
import monastry from './images/monastry.jpg';
import namur from './images/namur.jpg';
import oldies from './images/oldies.jpg';
import organ from './images/organ.jpg';
import oven from './images/oven.jpg';
import pine from './images/pine.jpg';
import psousa from './images/psousa.jpg';
import rainbow from './images/rainbow.jpg';
import raytracer from './images/raytracer.jpg';
import river from './images/river.jpg';
import sand from './images/sand.jpg';
import sea from './images/sea.jpg';
import seashell from './images/seashell.jpg';
import skycat from './images/skycat.jpg';
import slit from './images/slit.jpg';
import tansky from './images/tansky.jpg';
import train from './images/train.jpg';
import umbrella from './images/umbrella.jpg';
import underwater from './images/underwater.jpg';
import winnenden from './images/winnenden.jpeg';
import wood from './images/wood.jpg';
import './App.css';

function App() {
    const [fullscreen, setFullscreen] = useState<string>();
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        document.getElementById(hash)?.scrollIntoView({
            block: 'start',
            // This is apparently a typing bug
            // https://github.com/Microsoft/TypeScript/issues/28755
            // @ts-ignore
            behavior: 'instant'
        });
    }, []);

    return (
        <div id='app'>
            <Cover />
            <Header />
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xxl={5} xl={6} lg={7} md={8} sm={10}>
                        <Separator />
                        <Reference reference='hello-world' />
                        <Metadata
                            date={new Date(2025, 7, 2)}
                            language='en'
                        />
                        <Post>
                            <p>
                                One of my many useless feuds concerns the spelling of "Hello, World!". For those unfamiliar,
                                this sentence first appeared as an example on the iconic book <em>The C Programming Language</em>,
                                which was used to teach C back in the time when books were used for those things. C was
                                unreasonably successful, and the book became famous for its concise and effective examples.
                            </p>
                            <p>
                                The sentence now comes in many shapes and colors: "Hello world!", "Hello World!", "Hello World",
                                etc. Wikipedia titles its page "Hello, World!". It's impressive how many different ways there
                                are of putting these two simple words together.
                            </p>
                            <p>
                                My favorite one used to be "Hello World!". Then, about a year ago, I discovered that, in <em>The
                                C Programming Language</em>, Brian Kernighan and Dennis Ritchie opted for "hello, world". I
                                started by disliking this version. But, then, if we are going to keep using this phrase for the
                                sake of tradition, we might as well honor the original one. These days, I can't suppress a twinge
                                of irritation whenever I see another version. Ewwww, such ignorance...
                            </p>
                            <p>
                                Unfortunately, this history is much too forgotten. Given the book's status as <em>the</em> book
                                on one of the most successful programming languages ever to exist, and the phrase's place as the
                                most famous sentence in the world of computer programs, "hello, world" ought to see its history
                                a little more valued. So, if you can, spread the word!
                            </p>
                        </Post>

                        <Separator />
                        <Reference reference='oldies' />
                        <Image src={oldies} setFullscreen={setFullscreen} />
                        <Metadata
                            location='Príncipe Real'
                            date={new Date(2025, 6, 26)}
                        />
                        <Post>
                            Aqui se discutiram temas de sobeja importância, desde o jogo do Sporting nessa noite até gastar a reforma em BenficaTV, passando pela melhor forma de escolher um melão.
                        </Post>

                        <Separator />
                        <Reference reference='cpu' />
                        <Image src={cpu} setFullscreen={setFullscreen} />
                        <Metadata
                            date={new Date(2025, 5, 22)}
                            language='en'
                        />
                        <Post>
                            Ubuntu produced this piece of art, <em>The Hardworking CPU</em>, on a day my computer was under serious pressure.
                        </Post>

                        <Separator />
                        <Reference reference='herbs' />
                        <Image src={herbs} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='raytracer' />
                        <Image src={raytracer} setFullscreen={setFullscreen} />
                        <Metadata
                            date={new Date(2025, 5, 6)}
                            language='en'
                        />
                        <Post>
                            Trying to shoot a few rays. It'll probably turn out to be another abandoned project, but it's been fun so far.
                        </Post>

                        <Separator />
                        <Reference reference='pine' />
                        <Image src={pine} setFullscreen={setFullscreen} />
                        <Metadata location='FEUP' />

                        <Separator />
                        <Reference reference='floors' />
                        <Metadata
                            date={new Date(2025, 2, 25)}
                            language='en'
                        />
                        <Post>
                            I just realized that floors in a building are zero-indexed - ground floor being zero. No more Matlab for civil engineers, I guess...
                        </Post>

                        <Separator />
                        <Reference reference='cannon' />
                        <Image src={cannon} setFullscreen={setFullscreen} />
                        <Metadata location='Cerveira' />

                        <Separator />
                        <Reference reference='monastry' />
                        <Image src={monastry} setFullscreen={setFullscreen} />
                        <Metadata location='Mosteiro de Sanfins' />

                        <Separator />
                        <Reference reference='grave' />
                        <Image src={grave} setFullscreen={setFullscreen} />
                        <Metadata location='Mosteiro de Sanfins' />

                        <Separator />
                        <Reference reference='404' />
                        <Metadata
                            date={new Date(2025, 1, 5)}
                            language='en'
                        />
                        <Post>
                            <h1># Spy's work is dull</h1>
                            <p>I wrote these few lines for a programming exercise. I must admit they make me quite proud:</p>
                            <p>"As a spy, your work involves dull tasks like car chases or attending secret meetings. Every once in a while, though, you get an interesting job which requires you to program."</p>
                        </Post>

                        <Separator />
                        <Reference reference='blocks' />
                        <Image src={blocks} setFullscreen={setFullscreen} />
                        <Metadata
                            date={new Date(2025, 0, 25)}
                            language='en'
                        />
                        <Post>
                            Working on a new app. Placeholder name is <em>Blocks</em>.
                        </Post>

                        <Separator />
                        <Reference reference='404' />
                        <Metadata
                            date={new Date(2025, 0, 23)}
                            language='en'
                        />
                        <Post>
                            Porto's public bus company now has a new route numbered 404. My friends aren't as delighted by this number as I am...
                        </Post>

                        <Separator />
                        <Reference reference='clouds' />
                        <Image src={clouds} setFullscreen={setFullscreen} />
                        <Metadata location='Ponta da Atalaia' />

                        <Separator />
                        <Reference reference='skycat' />
                        <Image src={skycat} setFullscreen={setFullscreen} />
                        <Metadata location='Aljezur' />

                        <Separator />
                        <Reference reference='seashell' />
                        <Image src={seashell} setFullscreen={setFullscreen} />
                        <Metadata location='Moledo' />

                        <Separator />
                        <Reference reference='tal' />
                        <Metadata
                            date={new Date(2025, 0, 2)}
                            language='en'
                        />
                        <Post>
                            A short while ago, <em>This American Life</em> announced the release of their premium subscription, <em>This American Life Partners</em>. They missed a wonderful opportunity to call it <em>This American Dream</em>.
                        </Post>

                        <Separator />
                        <Reference reference='lebkuchen' />
                        <Image src={lebkuchen} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' author='Ms. T' />

                        <Separator />
                        <Reference reference='underwater' />
                        <Image src={underwater} setFullscreen={setFullscreen} />
                        <Metadata location='Coimbra' />

                        <Separator />
                        <Reference reference='headphones' />
                        <Image src={headphones} setFullscreen={setFullscreen} />
                        <Metadata location='FEUP' />

                        <Separator />
                        <Reference reference='ametade' />
                        <Image src={ametade} setFullscreen={setFullscreen} />
                        <Metadata location="Covão d'Ametade" author='Mr. P' />


                        <Separator />
                        <Reference reference='tansky' />
                        <Image src={tansky} setFullscreen={setFullscreen} />
                        <Metadata location='Manteigas' author='Mr. P' />

                        <Separator />
                        <Reference reference='moledo' />
                        <Image src={moledo} setFullscreen={setFullscreen} />
                        <Metadata location='Moledo' />

                        <Separator />
                        <Reference reference='personality' />
                        <Metadata
                            date={new Date(2024, 7, 6)}
                            language='en'
                        />
                        <Post>
                            <h1># Personality in your code</h1>
                            <p>I've been programming for a few years now, and every once in a while, this question pops up: how much personality should my program have?</p>
                            <p>The first time I remember thinking about this was shortly after I released Musicly. I was showing my dad around the app, and at some point, he noticed a joke I'd made on the search bar. He thought that I should remove it since jokes lack professionalism and could convey the wrong impression to the users. Sure enough, I took it out.</p>
                            <p>I kept on programming, and whenever the choice of a humorous sentence or feature came up, I used to stick to the safe and dull side of professionalism. And then I came across this <a href='https://www.youtube.com/watch?v=iSg0F3hwMnE&t'>video</a> on Computerphile which totally changed my mind on the subject. Marco Arment's argument that indie developpers should embrace their personality resonated with me and made me proud to add a personal touch to my apps.</p>
                            <p>Today, I firmly stand on the personal side of the discussion. It's fair to say that this video has shaped my behavior in the programming world. I hope you give it a try!</p>
                            <p>P.S.: There are three other videos on Computerphile with Marco Arment. All are very interesting and funny to watch - I can't help but love this guy! <a href='https://www.youtube.com/watch?v=yVRtJbXQsL8'>#1</a> <a href='https://www.youtube.com/watch?v=QH1XF0tOFsQ'>#2</a> <a href='https://www.youtube.com/watch?v=Xy5pzN-wLxg'>#3</a></p>
                        </Post>

                        <Separator />
                        <Reference reference='construction' />
                        <Image src={construction} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Aljezur' />

                        <Separator />
                        <Reference reference='train' />
                        <Image src={train} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Évora' />

                        <Separator />
                        <Reference reference='arrifana' />
                        <Image src={arrifana} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Portinho da Arrifana' />
                        
                        <Separator />
                        <Reference reference='winnenden' />
                        <Image src={winnenden} setFullscreen={setFullscreen} />
                        <Metadata location='Winnenden' />

                        <Separator />
                        <Reference reference='cemetery' />
                        <Image src={cemetery} setFullscreen={setFullscreen} />
                        <Metadata location='Winnenden' />

                        <Separator />
                        <Reference reference='dawn' />
                        <Image src={dawn} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='sand' />
                        <Image src={sand} setFullscreen={setFullscreen} />
                        <Metadata location='Praia do Camarido' />
                        
                        <Separator />
                        <Reference reference='assassination' />
                        <Image src={blood} setFullscreen={setFullscreen} border />
                        <Metadata
                            date={new Date(2024, 4, 1)}
                            language='pt'
                        />
                        <Post>
                            <h1># Assassínio</h1>
                            <p>Um! Dois! Três! Com três fortes golpes desfigurei-a por completo. Observei-a enquanto a sua vida se esvaía. Aqui e acolá, algumas partes do seu corpo ainda estrebuchavam, como se possuídas por algo. Vendo terminar assim uma vida, um sentimento de culpa começou a apoderar-se de mim. Deveria ter tido piedade?</p>
                            <p>Quando os últimos movimentos findaram, limpei o local do crime metodicamente. Primeiro recolhi os pedaços do corpo num saco de lixo. Depois, cuidadosamente, raspei as marcas de sangue das paredes do chuveiro com papel higiénico. Por fim, lavei com água abundante a arma do crime, para não deixar indícios. Desliguei as luzes e abandonei o local.</p>
                            <p>Assim termina a vida de uma centopeia.</p>
                        </Post>

                        <Separator />
                        <Reference reference='umbrella' />
                        <Image src={umbrella} setFullscreen={setFullscreen} />
                        <Metadata location='Palácio de Cristal' />

                        <Separator />
                        <Reference reference='feup' />
                        <Image src={feup} setFullscreen={setFullscreen} />
                        <Metadata location='FEUP' />
                        
                        <Separator />
                        <Reference reference='contrast' />
                        <Image src={contrast} setFullscreen={setFullscreen} />
                        <Metadata location='FEUP' />

                        <Separator />
                        <Reference reference='sea' />
                        <Image src={sea} setFullscreen={setFullscreen} />
                        <Metadata location='Leça da Palmeira' />

                        <Separator />
                        <Reference reference='graffiti' />
                        <Image src={graffiti} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='math' />
                        <Image src={math} setFullscreen={setFullscreen} />
                        <Metadata location='Porto' />

                        <Separator />
                        <Reference reference='wood' />
                        <Image src={wood} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='organ' />
                        <Image src={organ} setFullscreen={setFullscreen} />
                        <Metadata location='Sé de Braga' />

                        <Separator />
                        <Reference reference='bridge' />
                        <Image src={bridge} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='river' />
                        <Image src={river} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='chestnuts' />
                        <Image src={chestnuts} setFullscreen={setFullscreen} />
                        <Metadata location='Caminha' />

                        <Separator />
                        <Reference reference='oven' />
                        <Image src={oven} setFullscreen={setFullscreen} />
                        <Metadata location='Aljezur' author='M. Barbosa' />

                        <Separator />
                        <Reference reference='cave' />
                        <Image src={cave} setFullscreen={setFullscreen} />
                        <Metadata location='Madeira' />

                        <Separator />
                        <Reference reference='rainbow' />
                        <Image src={rainbow} setFullscreen={setFullscreen} />
                        <Metadata location='Madeira' />

                        <Separator />
                        <Reference reference='gaspar' />
                        <Image src={gaspar} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Aljezur' />

                        <Separator />
                        <Reference reference='slit' />
                        <Image src={slit} setFullscreen={setFullscreen} />
                        <Metadata location='Serra da Estrela' />

                        <Separator />
                        <Reference reference='mikra' />
                        <Image src={mikra} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Aljezur' author='M. Barbosa' />

                        <Separator />
                        <Reference reference='mail' />
                        <Image src={mail} setFullscreen={setFullscreen} />
                        <Metadata location='Charleroi' />

                        <Separator />
                        <Reference reference='namur' />
                        <Image src={namur} setFullscreen={setFullscreen} />
                        <Metadata location='Namur' />

                        <Separator />
                        <Reference reference='psousa' />
                        <Image src={psousa} setFullscreen={setFullscreen} aspectRatio={16/9} />
                        <Metadata location='Mosteiro de Paço de Sousa' />

                        <Separator />
                    </Col>
                </Row>
            </Container>
            <Fullscreen image={fullscreen} setFullscreen={setFullscreen} />
        </div>
    );
}

export default App;
