import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        '& h4':{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p" :{
          textAlign: 'justify'
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4" :{
            fontSize : "1rem",
          },
        }
      }}>
        <Typography  variant="h4">Welcome To My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
          aspernatur ut hic ducimus minima labore molestiae ad repellendus
          veritatis voluptatibus, repellat natus consectetur, perspiciatis qui
          architecto inventore reprehenderit. Sint pariatur officiis, eos alias
          aliquid corrupti laborum amet repudiandae obcaecati ullam magnam.
          Corrupti laboriosam maxime ex iste animi qui blanditiis, rerum atque!
          Animi ducimus tenetur corporis porro ipsum totam laudantium
          repudiandae necessitatibus, provident, reiciendis enim dicta nisi
          culpa officiis molestiae sit quaerat quam placeat impedit, similique
          ex consectetur! Distinctio quis nemo ullam eos libero adipisci. Labore
          saepe velit expedita vitae nesciunt aspernatur officia maiores
          reiciendis rerum, pariatur recusandae, culpa sapiente.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          cumque, reprehenderit possimus commodi ut voluptate ipsam sed officia
          asperiores, fugiat tempora maiores quis. Similique dolores, molestias
          aliquid natus laborum quos ipsam pariatur beatae animi, provident
          nobis ab ipsa exercitationem nesciunt suscipit. Perferendis dolore
          sint accusantium aut in libero rem totam repellat alias quisquam,
          saepe, ipsum laboriosam deserunt! Voluptates odio odit rem beatae
          tempore, et earum? Rem ea libero magnam et cupiditate, magni saepe
          sint voluptatum assumenda doloribus provident. Eos doloremque
          voluptates placeat! Porro autem, quos accusamus voluptates, magni
          labore esse id voluptate nihil illum saepe, nesciunt temporibus nulla?
          Cupiditate, porro.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
