import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../../Post';

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post imageUrl="https://via.placeholder.com/250x250">Teste</Post>);
        
        expect(screen.getByText("Teste")).toBeInTheDocument();
        const postImage = screen.getByAltText("Post");
        
        expect(postImage).toBeInTheDocument();
        expect(postImage).toHaveAttribute(
          "src",
          "https://via.placeholder.com/250x250"
        );
    
        // Verifica se o componente PostComments está presente
        expect(screen.getByTestId("post-comments")).toBeInTheDocument();
      });
    });