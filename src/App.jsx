import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from 'react-transition-group';
import styles from './item.module.css';
import './content.css'; // Import or define your CSS styles

const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function App({ in: inProp }) {
  const [expandedComponent, setExpandedComponent] = useState(null);

  const [girdRowValue1, setGirdRowValue1] = useState('1/3');
  const [girdRowValue2, setGirdRowValue2] = useState('1/3');
  const [girdRowValue3, setGirdRowValue3] = useState('1/3');

  const handleClick = (id) => {
    if (expandedComponent === id) {
      return setExpandedComponent(null);
    } else {
      if (id === 1) {
        setGirdRowValue2('1/2');
        setGirdRowValue3('2/3');
      } else if (id === 2) {
        setGirdRowValue1('1/2');
        setGirdRowValue3('2/3');
      } else if (id === 3) {
        setGirdRowValue1('1/2');
        setGirdRowValue2('2/3');
      }
    }

    setExpandedComponent(id);
  };

  const nodeRef = useRef(null);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} sx={{ height: '100%', py: 2 }}>
        <Stack sx={{ height: '100%', gap: 2 }}>
          <Paper sx={{ height: '300px' }} elevation={15}></Paper>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${
                expandedComponent === null ? 3 : 4
              },1fr)`,
              gridTemplateRows: 'repeat(2,1fr)',
              gap: 2,
            }}
          >
            <Paper
              className={`gird-item`}
              sx={{
                p: 3,
                gridColumn:
                  expandedComponent === 1
                    ? '1/4'
                    : expandedComponent === null
                    ? '1/2'
                    : '4/5',
                gridRow:
                  expandedComponent === 1 || expandedComponent === null
                    ? '1/3'
                    : girdRowValue1,
                transition: 'all 0.3s ease',
                // transition: 'grid-column 0.3s ease, grid-row 0.3s ease',
              }}
              onClick={() => handleClick(1)}
              elevation={15}
            >
              <Typography variant="h4">Courses</Typography>
              <Stack sx={{ flexDirection: 'row', gap: 2 }}>
                <Typography variant="body1">
                  Ultimate Web Designer & Web Developer Course Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Vero, quidem
                  blanditiis. Corrupti dicta consequuntur delectus repellendus
                  non nam. Similique accusantium aut veniam suscipit. Iure neque
                  dolor odit corrupti repellat eos?
                </Typography>
                <CSSTransition
                  in={expandedComponent === 1}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                  ref={nodeRef}
                >
                  <Typography variant="body1">
                    Ultimate Web Designer & Web Developer Course Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Vero, quidem
                    blanditiis. Corrupti dicta consequuntur delectus repellendus
                    non nam. Similique accusantium aut veniam suscipit. Iure
                    neque dolor odit corrupti repellat eos?
                  </Typography>
                </CSSTransition>
              </Stack>
              <button>see all Courses</button>
            </Paper>
            <Paper
              className={`gird-item `}
              sx={{
                p: 3,
                // gridArea: expandedComponent === 2 ? '1 / 1 / 4 / 4' : '',
                // gridColumn: expandedComponent === 1 ? '1/4' : '4/5',
                // gridRow: expandedComponent === 1 ? '1/3' : '1/2',
                gridColumn:
                  expandedComponent === 2
                    ? '1/4'
                    : expandedComponent === null
                    ? '2/3'
                    : '4/5',
                gridRow:
                  expandedComponent === 2 || expandedComponent === null
                    ? '1/3'
                    : girdRowValue2,
                transition: 'all 0.3s ease',
              }}
              onClick={() => handleClick(2)}
              elevation={15}
            >
              <Typography variant="h4">Projects</Typography>
              <Typography variant="body1">
                Ultimate Web Designer & Web Developer Course Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Vero, quidem blanditiis.
                Corrupti dicta consequuntur delectus repellendus non nam.
                Similique accusantium aut veniam suscipit. Iure neque dolor odit
                corrupti repellat eos?
              </Typography>
              <button>see all projects</button>
            </Paper>
            <Paper
              className={`gird-item`}
              sx={{
                p: 3,
                // gridArea: expandedComponent === 3 ? '1 / 1 / 4 / 4' : '',
                // gridColumn: expandedComponent === 1 ? '1/4' : '4/5',
                // gridRow: expandedComponent === 1 ? '1/3' : '1/2',
                gridColumn:
                  expandedComponent === 3
                    ? '1/4'
                    : expandedComponent === null
                    ? '3/4'
                    : '4/5',
                gridRow:
                  expandedComponent === 3 || expandedComponent === null
                    ? '1/3'
                    : girdRowValue3,
                transition: 'all 0.3s ease',
              }}
              onClick={() => handleClick(3)}
              elevation={15}
            >
              <Typography variant="h4">Jobs</Typography>
              <Typography variant="body1">
                Ultimate Web Designer & Web Developer Course Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Vero, quidem blanditiis.
                Corrupti dicta consequuntur delectus repellendus non nam.
                Similique accusantium aut veniam suscipit. Iure neque dolor odit
                corrupti repellat eos?
              </Typography>
              <button>see all jobs</button>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
