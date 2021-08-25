import React from 'react';
import styled from 'styled-components';

function SidebarOption({Icon, title}) {
  return (
    <SidebarOptionContainer>
      <Icon/> <span className="title">{title} </span>
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div``;
