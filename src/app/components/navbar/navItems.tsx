import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;
const NewItem = styled.li`
  ${tw`
        text-xs
        md: text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        transition
        duration-300
        ease-in-out
        hover:  text-gray-700
    `}
`;

const NavItems = () => {
  return (
    <ListContainer>
      <NewItem>
        <a href="#">Home</a>
      </NewItem>
      <NewItem>
        <a href="#">Cars</a>
      </NewItem>
      <NewItem>
        <a href="#">Services</a>
      </NewItem>
      <NewItem>
        <a href="#">Contact Us</a>
      </NewItem>
    </ListContainer>
  );
};

export default NavItems;
