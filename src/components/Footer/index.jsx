import { 
    FooterContainer, 
    Container, 
    Nav, 
    Column, 
    Title, 
    List, 
    ListItem, 
    MobileContainer,
    TitleMobile, 
    Row,
    Link,
    Baixar,
    ContainerSocial,
    SocialList,
    LinkItems
} from './styles';

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <Container>
            <Nav>
                <Column>
                    <Title>make the change</Title>
                    <List>
                        <ListItem>Para Empresas</ListItem>
                    </List>
                </Column>
                <Column>
                        <Title>Informações</Title>
                    <List>
                        <ListItem>Central de Ajuda</ListItem>
                        <ListItem>Termos de uso</ListItem>
                        <ListItem>Politicas de Privacidade</ListItem>
                        <ListItem>Canal de Contato LGPD</ListItem>
                    </List>
                </Column>
            </Nav>
            <MobileContainer>
                <TitleMobile>Dowload Grátis</TitleMobile>
                <Row>
                <Link>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                    <Baixar>Baixar na <span>Google Play</span></Baixar>
                </Link>
                <Link>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                    <Baixar>Baixar na <span>App Store</span></Baixar>
                </Link>
                </Row>
            </MobileContainer>
        </Container>
        <ContainerSocial>
            <svg xmlns="http://www.w3.org/2000/svg" width="310" height="44" fill="none" viewBox="0 0 310 44"><path fill="#E5E044" d="M96.383 32.674a6.455 6.455 0 01-1.076 3.581 6.425 6.425 0 01-2.879 2.378 6.402 6.402 0 01-7-1.388 6.458 6.458 0 01-1.397-7.02 6.435 6.435 0 012.364-2.893 6.405 6.405 0 018.102.797 6.454 6.454 0 011.886 4.545z"></path><path fill="#fff" d="M77.102 35.135a16.797 16.797 0 006.083-9.812c.806-3.89.212-7.94-1.677-11.431a16.754 16.754 0 00-8.643-7.637 16.687 16.687 0 00-11.516-.227 16.748 16.748 0 00-8.934 7.292 16.835 16.835 0 00-2.123 11.357 16.803 16.803 0 005.696 10.043 16.705 16.705 0 0010.815 3.973 16.667 16.667 0 0010.299-3.558zM33.423 20.765V0c-2.194 0-4.352.563-6.267 1.638a12.848 12.848 0 00-4.671 4.5 16.68 16.68 0 00-10.407-.362 16.73 16.73 0 00-8.605 5.885 16.823 16.823 0 00-.458 19.85 16.737 16.737 0 008.324 6.278 16.681 16.681 0 0010.413.122 16.733 16.733 0 008.468-6.08 16.821 16.821 0 003.243-9.928c0-.384-.02-.762-.04-1.138zM41.652 12.934c-1.69 0-3.312.674-4.507 1.873a6.408 6.408 0 00-1.868 4.522v19.364a12.81 12.81 0 009.072-3.77 12.892 12.892 0 003.758-9.101v-6.405c0-1.718-.68-3.366-1.89-4.582a6.452 6.452 0 00-4.565-1.901z"></path><path fill="#fff" d="M48.117 6.44a6.455 6.455 0 01-1.082 3.579 6.424 6.424 0 01-2.88 2.372 6.4 6.4 0 01-6.997-1.396 6.46 6.46 0 01-1.392-7.019 6.436 6.436 0 012.365-2.89 6.405 6.405 0 018.105.801 6.454 6.454 0 011.881 4.553z"></path><path fill="#E5E044" d="M119.203 32.684v6.259h-3.794v-5.999c0-2.271-.379-2.927-1.781-2.927-2.062 0-2.538 1.81-2.538 4.714v4.212h-3.793v-5.999c0-2.271-.38-2.927-1.782-2.927-2.062 0-2.538 1.81-2.538 4.714v4.212h-3.793V26.925h3.793v1.212l-.709 2.147h.948c.473-2.142 1.565-3.594 3.889-3.594 2.264 0 3.203 1.5 3.56 3.594h.687c.475-2.142 1.542-3.594 3.866-3.594 3.062-.005 3.985 2.756 3.985 5.994zM125.653 31.874l3.774-.522c0-.977-.755-1.572-2.398-1.572-1.509 0-2.372.643-2.372 1.738H121.1c0-3.046 2.586-4.832 5.929-4.832 3.298 0 6.194 1.595 6.194 5.552v3.381h1.73v3.332h-2.633c-1.138 0-1.779-.644-1.779-1.785v-.252l.594-1.428h-.951c-.451 1.998-1.613 3.69-4.956 3.69-3.726 0-4.365-2.285-4.365-3.534 0-2.054 1.233-3.268 4.79-3.768zm.309 3.975c2.088 0 3.465-.88 3.465-2.357l-3.062.429c-1.137.166-1.708.333-1.708 1.022 0 .689.664.906 1.305.906zM142.806 34.302l-2.633 1.236v3.405h-3.794V21.45h3.794v10.16l5.481-2.523-.048-2.166h3.809v2.618c0 1.14-.45 1.88-1.494 2.38l-1.852.855 4.058 6.165h-4.332l-2.989-4.638zM156.661 26.686c3.725 0 6.334 2.213 6.334 5.855v1.19h-9.086c0 1.379 1.006 2.355 3.154 2.355 1.331 0 2.327-.474 2.564-1.38h3.796c-.239 1.739-2.206 4.474-6.36 4.474-4.601 0-6.711-2.998-6.711-6.402 0-3.806 2.586-6.092 6.309-6.092zm2.767 4.903c0-.906-.664-1.81-2.767-1.81-2.103 0-2.752.904-2.752 1.81h5.519z"></path><path fill="#fff" d="M174.951 35.612v3.331l-6.194.238c-1.303.048-2.012-.715-2.012-2.02v-6.904h-2.85v-3.331h2.847v-2.272l3.804-1.183v3.452h3.937v3.331h-3.937v5.593l4.405-.235zM190.321 32.444v6.499h-3.796V33.04c0-2.19-.639-3.028-2.465-3.028-2.065 0-3.416 1.095-3.416 4.474v4.452h-3.796V21.45h3.796v6.925l-.712 2.14h.948c.476-2.14 1.97-3.83 4.528-3.83 3.064 0 4.913 2.046 4.913 5.758zM198.055 26.686c3.726 0 6.335 2.213 6.335 5.855v1.19h-9.087c0 1.379 1.006 2.355 3.155 2.355 1.328 0 2.327-.474 2.563-1.38h3.796c-.251 1.739-2.206 4.474-6.359 4.474-4.601 0-6.712-2.998-6.712-6.402 0-3.806 2.586-6.092 6.309-6.092zm2.768 4.903c0-.906-.665-1.81-2.768-1.81-2.103 0-2.752.904-2.752 1.81h5.52z"></path><path fill="#E5E044" d="M212.556 26.686c3.27 0 6.261 1.786 6.427 5.211h-3.803c-.141-1.07-1.115-1.88-2.632-1.88-1.803 0-2.752 1.072-2.752 2.905 0 1.832.949 2.927 2.752 2.927 1.51 0 2.491-.81 2.632-1.88h3.796c-.166 3.427-3.155 5.211-6.428 5.211-3.818 0-6.54-2.236-6.54-6.258 0-4.023 2.722-6.236 6.548-6.236zM233.872 32.444v6.499h-3.796V33.04c0-2.19-.639-3.028-2.465-3.028-2.066 0-3.416 1.095-3.416 4.474v4.452h-3.797V21.45h3.797v6.925l-.712 2.14h.948c.475-2.14 1.97-3.83 4.528-3.83 3.064 0 4.913 2.046 4.913 5.758zM240.327 31.874l3.774-.522c0-.977-.755-1.572-2.397-1.572-1.51 0-2.373.643-2.373 1.738h-3.557c0-3.046 2.584-4.832 5.93-4.832 3.298 0 6.191 1.595 6.191 5.552v3.381h1.733v3.332h-2.634c-1.14 0-1.779-.644-1.779-1.785v-.252l.592-1.428h-.949c-.45 1.998-1.612 3.69-4.958 3.69-3.723 0-4.365-2.285-4.365-3.534 0-2.054 1.235-3.268 4.792-3.768zm.31 3.975c2.088 0 3.464-.88 3.464-2.357l-3.062.429c-1.139.166-1.708.333-1.708 1.022 0 .689.664.906 1.306.906zM254.845 34.491v4.452h-3.798V26.925h3.793v1.451l-.711 2.14h.95c.473-2.14 1.968-3.83 4.529-3.83 3.059 0 4.91 2.046 4.91 5.759v6.498h-3.796V33.04c0-2.19-.641-3.028-2.468-3.028-2.055.005-3.409 1.1-3.409 4.48zM281.272 26.925v3.332h-.793a2.044 2.044 0 00-1.117.214c.234.422.349.899.333 1.38 0 2.272-2.111 3.688-5.409 4.796 2.729-.167 5.268.547 5.268 3.094 0 3.545-4.154 3.952-13.049 3.952v-3.314c7.758 0 9.227-.118 9.227-1.426 0-1.766-4.291-.976-7.969-.358l-.403-2.14c2.727-.288 5.195-.573 7.376-1.095v-.962c-4.387 1.57-9.013.926-9.013-3.028 0-3.165 2.988-4.69 6.762-4.69 1.826 0 3.486.359 4.744 1.285.71-.926 1.945-1.045 3.019-1.045l1.024.005zm-5.384 4.687c0-1.01-.903-1.595-3.179-1.595-2.277 0-3.203.596-3.203 1.595 0 1 .926 1.595 3.203 1.595 2.276 0 3.179-.57 3.179-1.595zM288.294 26.686c3.725 0 6.334 2.213 6.334 5.855v1.19h-9.086c0 1.379 1.006 2.355 3.157 2.355 1.328 0 2.324-.474 2.561-1.38h3.796c-.237 1.739-2.207 4.474-6.357 4.474-4.604 0-6.715-2.998-6.715-6.402.005-3.806 2.586-6.092 6.31-6.092zm2.767 4.903c0-.906-.664-1.81-2.767-1.81-2.103 0-2.752.904-2.752 1.81h5.519zM310 39.417v2.857h-12.812v-2.857H310z"></path></svg>
            <SocialList>
                <ListItem>
                    <LinkItems>
                        <FaLinkedinIn />
                    </LinkItems>
                </ListItem>
                <ListItem>
                    <LinkItems>
                        <FaFacebookF />
                    </LinkItems>
                </ListItem>
                <ListItem>
                    <LinkItems>
                        <FaTwitter />
                    </LinkItems>
                </ListItem>
                <ListItem>
                    <LinkItems>
                        <FaInstagram />
                    </LinkItems>
                </ListItem>
            </SocialList>
        </ContainerSocial>
    </FooterContainer>
  )
}

export { Footer }