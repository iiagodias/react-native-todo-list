import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.primary};
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView``;

export const BodyProfile = styled.View`
  padding: 15px;
  background-color: ${({ theme }) => theme.secundary};
  width: 100%;
  border-radius: 10px;
`;

export const ContainerAvatar = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const ContainerName = styled.View`
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
`;

export const BoxIcon = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ size }) => ({
  color: '#000',
  size
}))``;

export const BoxLoading = styled.View`
  margin-top: 15px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const BoxAdd = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.secundary};
  padding: 20px;
  width: 90%;
  align-items: center;
  border-radius: 10px;
`;

export const TextAdd = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;
