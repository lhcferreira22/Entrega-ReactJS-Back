import React from "react";

import { connect } from "react-redux";

const Musicas = ({ activeLesson, activeModule }) => {
  return (
    <div>
      <strong>Módulo: {activeModule.title}</strong>
      <br />
      <span>Play: {activeLesson.title}</span>
    </div>
  
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
}))(Musicas);
