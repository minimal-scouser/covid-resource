import React from 'react';
import './style.css';
import { Row, Col, Text, Button } from '../../common/RowColStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDirections,
  faPhoneAlt,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const Card = () => {
  return (
    <>
      <div class="row">
        <div class="column">
          <div class="card">
            <Button
              disabled
              color={'#659a62'}
              style={{
                minHeight: '24px',
                marginTop: '4px',
                padding: '5px 10px',
              }}
            >
              <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;Available
            </Button>
            <Row>
              <Text style={{ margin: '10px 0' }} bold={true}>
                Oxygen Dhaba
              </Text>
            </Row>
            <br />
            <br />
            <Row style={{ marginTop: '20px' }}>
              <Col border={true} width={'20%'}>
                <Text
                  sub1={true}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;{' '}
                  <a href="tel:+62896706255135" style={{ color: '#779ff0' }}>
                    Call
                  </a>
                </Text>
              </Col>
              &nbsp;&nbsp;&nbsp;
              <Col border={true} width={'20%'}>
                <Text
                  sub1={true}
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <FontAwesomeIcon icon={faDirections} /> &nbsp;
                  <a
                    style={{ color: '#779ff0' }}
                    href="http://www.google.com/maps/place/49.46800006494457,17.11514008755796/@49.46800006494457,17.11514008755796,17z"
                  >
                    Go
                  </a>
                </Text>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
