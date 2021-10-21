import React, {CSSProperties} from 'react';

const style: CSSProperties = {
  backgroundColor: "#ace6c7",
  border: "solid #829dae 1px",
  height: "20rem",
  padding: "2rem",
  textAlign: "center"
}

const Page: React.FC = ({}) => {
  return (
  <div style={style}>Detta är React Micro FE:s huvudsida</div>
  )
}

export default Page

