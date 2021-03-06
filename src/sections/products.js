import React from 'react';
import { Box, Container, Heading, Text } from 'theme-ui';
const ROAD_MAP_DATA = {
  blockTitle: {
    title: 'Product Offering',
    text: 'Consise description of each of our products',
  },
};

const Products = () => {
  const { blockTitle } = ROAD_MAP_DATA;
  const { title, text } = blockTitle;
  return (
    <Box as="section" id="products" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.blockTitle}>
          <Heading as="h2">{title}</Heading>
          <Text as="p">{text}</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;

const styles = {
  section: {
    mb: ['63px', '75px', null, '90px', '0', null, '0'],
    position: 'relative',
  },
  shapeLine: {
    width: '100%',
    height: '280px',
    position: 'absolute',
    top: [
      null,
      null,
      null,
      null,
      null,
      'calc(50% - 176px)',
      'calc(50% - 172px)',
      'calc(50% - 168px)',
    ],
    left: 0,
    display: ['none', null, null, null, null, 'block'],
    objectFit: 'cover',
  },
  container: {
    position: 'relative',
  },
  flex: {
    gap: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  blockTitle: {
    textAlign: 'center',
    mb: ['30px', null, '50px', null, '60px', null, '75px', '105px'],
    h2: {
      fontSize: ['24px', null, '28px', '30px'],
      lineHeight: [1.35],
      color: 'heading',
      mb: [2, null, '13px'],
      fontWeight: 'body',
    },
    p: {
      fontSize: ['15px', null, '16px'],
      lineHeight: 1.85,
      color: 'text_secondary',
    },
  },
  post: {
    position: 'relative',
    flex: [
      '0 0 100%',
      null,
      '0 0 calc(50% - 5px)',
      null,
      '0 0 calc(33.333% - 5px)',
      '0 0 calc(33.333% - 25px)',
    ],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    mb: ['32px', null, '40px', '45px', 0],
    px: [1, null, null, 6, 2, 0],
    '.content-header': {
      order: [1, null, null, null, null, 0],
    },
    '.pointer': {
      backgroundColor: 'rgba(177,177,177,0.2)',
      border: '1px solid rgba(0,7,62,0.2)',
      borderRadius: '50%',
      width: '42px',
      height: '42px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      span: {
        backgroundColor: 'rgba(0,7,62,0.3)',
        borderRadius: '50%',
        width: '14px',
        height: '14px',
      },
    },
    h3: {
      color: 'heading',
      fontWeight: 'heading',
      fontSize: ['18px', null, null, null, '20px'],
      lineHeight: 1.45,
      mb: ['7px', null, 2, null, '13px'],
      mt: [2, null, null, null, null, 0],
    },
    p: {
      fontSize: ['14px', null, '15px'],
      lineHeight: 1.85,
      color: 'text',
      maxWidth: '370px',
      mx: 'auto',
      mb: [0, null, null, null, null, '25px', null, '35px'],
    },
    '> span': {
      color: 'text',
      fontSize: ['14px', null, '15px'],
      display: 'block',
      lineHeight: 1,
      marginTop: ['12px', null, '15px'],
    },
    '&:nth-of-type(2)': {
      mt: [null, null, null, null, null, '162px', null, '166px'],
      flexDirection: ['column', null, null, null, null, 'column-reverse'],
      h3: {
        mt: [null, null, null, null, null, '22px', null, '30px'],
      },
      '> span': {
        marginTop: ['15px', null, null, null, null, '0'],
        mb: [0, null, null, null, null, '15px'],
      },
    },
    '&:nth-of-type(3)': {
      mt: [null, null, null, null, null, '67px', null, '38px'],
    },
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: [1, null, null, '15px', '60px', '45px', '50px', '60px'],
  },
  button: {
    backgroundColor: '#EEF1F4',
    borderRadius: '5px',
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    lineHeight: 1,
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'rgba(2,7,62,.7)',
    transition: 'all 300ms ease',
    '&:hover': {
      backgroundColor: '#161718',
      color: '#ffffff',
    },
  },
};
