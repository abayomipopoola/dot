import React from 'react';
import { Box, Container, Flex, Heading, Text, Link } from 'theme-ui';

const CAREER_DATA = {
  blockTitle: {
    title: 'Dot Careers',
    text: 'At Dot, we believe work is more than a desk or to-do list. We believe work can be fulfilling and empower a better life.',
  },
  posts: [
    {
      title: 'Take charge of your career',
      text: 'Autonomy and radical responsibility are non-optional conditions for working at Dot.',
    },
    {
      title: 'Do what’s never been done',
      text: 'We’re here to change the outcome of businesses everywhere—for the better.',
    },
    {
      title: 'Focused on scaling',
      text: 'We have the agility of a startup, the team to execute at scale',
    },
  ],
};

const Careers = () => {
  const { blockTitle, posts } = CAREER_DATA;
  const { title, text } = blockTitle;
  return (
    <Box as="section" id="careers" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.blockTitle}>
          <Heading as="h2">{title}</Heading>
          <Text as="p">{text}</Text>
        </Box>
        <Flex sx={styles.row}>
          {posts.map(({title, text }, index) => (
            <Box sx={styles.post} key={`roadmap-key-${index}`}>
              <Box className="content-header">
                <Heading as="h3">{title}</Heading>
                <Text as="p">{text}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
      <Box sx={styles.buttonWrap}>
        <Link sx={styles.button} href="https://jobs.dot.limited/" target={'_blank'}>
            Explore Current Openings
        </Link>
      </Box>
    </Box>
  );
};

export default Careers;

const styles = {
  section: {
    pb: ['70px', null, '80px', null, '95px', null, '110px'],
    pt: ['65px', null, '75px', null, '85px', null, '95px'],
    backgroundColor: 'background_secondary',
  },
  container: {
    position: 'relative',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
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
        fontSize: ['15px', null, '16px', null, '18px'],
        lineHeight: [1.9, null, 2],
        color: 'text_secondary',
        maxWidth: '505px',
        mx: 'auto',
        mb: ['25px', null, '30px', '35px', null, '45px'],
      },
  },
  post: {
    mb: ['32px', null, null, null, 0],
    flex: ['0 0 100%', null, '0 0 50%', null, '0 0 33%'],
    textAlign: 'center',
    h3: {
      fontSize: ['18px', null, null, null, null, '20px'],
      lineHeight: 1.45,
      letterSpacing: '-0.5px',
      fontWeight: '500',
      color: '#02073E',
      mt: ['18px', '20px', null, null, '25px', '30px', null, '40px'],
      mb: ['10px', '15px', null, null, null, '20px'],
    },
    p: {
      maxWidth: '266px',
      mx: 'auto',
      color: '#02073E',
      fontSize: ['14px', '15px'],
      lineHeight: 2,
      px: [null, null, null, null, '5px', 0],
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
