import * as React from 'react';


import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";


export const EmailTemplate = ({
  response,
}) => (
  <Html>
      <Head />
      <Preview>File sharing App</Preview>
      <Body style={main}>
        <Container>
          

          <Section style={content}>
            

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {response.emailToSend.split('@')[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {`${response?.userName} shared a file with you`}
                </Heading>

                <Text style={paragraph}>
                  <b>File name:{response.fileName} </b>
                  
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>FIle Size:{response.fileSize} </b>
                  
                  </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: {response.fileType} </b>
                </Text>
                
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button href={response?.shortUrl} style={button}  className='bg-primary rounded-xl'>Click here to see 👀</Button>
              </Column>
            </Row>
          </Section>

          

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Itawa Kshetra, Dewas, MP
            INDIA |
          </Text>
        </Container>
      </Body>
    </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};