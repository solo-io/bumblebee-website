import { colors } from 'Styles/colors';
import styled from '@emotion/styled';

//tight item with a list inside
export const SubsetListItem = styled.div`
  display: inline-flex;
  font-size: 14px;
  line-height: 17px;
  border-radius: 16px;
  border: 1px solid ${colors.marchGrey};
  text-transform: lowercase;
  padding: 0 8px;
  margin-right: 8px;
`;

export const SubsetItemTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-right: 4px;
`;
