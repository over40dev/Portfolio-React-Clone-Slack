import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SlangChat</h2>
          <h3>
            <FiberManualRecordIcon />
            Ted Cogent
          </h3>
        </SidebarInfo>
        <CreateIcon></CreateIcon>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  font-size: 1rem;
  background-color: var(--brand-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(----brand-color-accent);
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(----brand-color-accent);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--brand-color-accent);
    font-size: 1.1em;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 1em;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 0.8em;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 0.8em;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;
