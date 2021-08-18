import React from 'react';
import './styles.css';

class App extends React.Component {
  state = {
    modalAlbumsActive: null,
    modalUserActive: null,
    modalPhotosActive: false,
    idAlbumPhotos: undefined,
    idAlbum: undefined,
    users: [],
    albums: [],
    albumsPhotos: [],
    query: ''
  };

  handleAlbumClick = (param, id) => {
    this.setState({
      modalAlbumsActive: param,
      idAlbum: id
    });
  };

  handleUserClick = (index) => {
    this.setState({
      modalUserActive: this.state.users[index]
    });
  };

  handlePhotosClick = (param, id) => {
    this.setState({
      modalPhotosActive: param,
      idAlbumPhotos: id
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data
        });
      });
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          albums: data
        });
      });
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          albumsPhotos: data
        });
      });
  }

  render() {
    var photosFiltered = this.state.albumsPhotos.filter(
      (item) => item.albumId === this.state.idAlbumPhotos
    );
    var albumFiltered = this.state.albums.filter(
      (item) => item.userId === this.state.idAlbum
    );

    var result = this.state.users;
    if (this.state.query) {
      const parsedQuery = this.state.query.toLowerCase()
      result = this.state.users.filter(
        (item) => item.name.toLowerCase().indexOf(parsedQuery) !== -1 || item.email.toLowerCase().indexOf(parsedQuery) !== -1
      );
    }

    return (
      <div>
        <div style={{ textAlign: 'center', margin: 50 }}>
          <strong style={{ width: '100%', display: 'inline-block' }}>
            Lista de usuários
          </strong>
          <input
            type='text'
            placeholder='Buscar usuarios'
            onChange={(event) => this.setState({ query: event.target.value })}
          />
        </div>
        <table align='center'>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Email</td>
              <td>Telefone</td>
              <td>Website</td>
              <td>Quantidade Albums</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>0</td>
                <td>
                  <span
                    style={{
                      color: 'blue',
                      textDecoration: 'underline',
                      marginRight: 10,
                      cursor: 'pointer'
                    }}
                    onClick={() => this.handleUserClick(item.id)}
                  >
                    ver detalhe do usuário
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.state.modalAlbumsActive && (
          <div
            style={{
              border: '1px solid #ccc',
              marginTop: 10,
              padding: 10,
              position: 'absolute',
              top: 0,
              background: '#fff'
            }}
          >
            <strong>Album - {'title'}</strong>
            <span
              style={{
                color: 'blue',
                textDecoration: 'underline',
                marginRight: 10,
                cursor: 'pointer'
              }}
              onClick={() =>
                this.setState({
                  modalAlbumsActive: null
                })
              }
            >
              Fechar
            </span>
            <div>
              {albumFiltered.map((item) => (
                <div
                  style={{
                    background: '#ccc',
                    margin: 5
                  }}
                >
                  <div>user: {item.userId}</div>
                  <div>{item.title}</div>
                  <div
                    style={{
                      color: 'blue',
                      textDecoration: 'underline',
                      marginRight: 10,
                      cursor: 'pointer'
                    }}
                    onClick={() => this.handlePhotosClick(true, item.id)}
                  >
                    ver fotos
                  </div>
                  <div>...</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {this.state.modalUserActive && (
          <div
            style={{
              border: '1px solid #ccc',
              marginTop: 10,
              padding: 10,
              position: 'absolute',
              top: 0,
              background: '#fff'
            }}
          >
            <strong>Usuário - {'name'}</strong>
            <span
              style={{
                color: 'blue',
                textDecoration: 'underline',
                marginRight: 10,
                cursor: 'pointer'
              }}
              onClick={() =>
                this.setState({
                  modalUserActive: null
                })
              }
            >
              Fechar
            </span>
            <div>
              <div>{this.state.modalUserActive.name}</div>
              <div>{this.state.modalUserActive.username}</div>
              <div>{this.state.modalUserActive.email}</div>
              <div>{this.state.modalUserActive.phone}</div>
              <span
                style={{
                  color: 'blue',
                  textDecoration: 'underline',
                  marginRight: 10,
                  cursor: 'pointer'
                }}
                onClick={() =>
                  this.handleAlbumClick(true, this.state.modalUserActive.id)
                }
              >
                ver álbum
              </span>
            </div>
          </div>
        )}

        {this.state.modalPhotosActive && (
          <div
            style={{
              border: '1px solid #ccc',
              marginTop: 10,
              padding: 10,
              position: 'absolute',
              top: 0,
              background: '#fff'
            }}
          >
            <strong>Lista de Fotos</strong>
            <span
              style={{
                color: 'blue',
                textDecoration: 'underline',
                marginRight: 10,
                cursor: 'pointer'
              }}
              onClick={() =>
                this.setState({
                  modalPhotosActive: null
                })
              }
            >
              Fechar
            </span>
            <div>
              {photosFiltered.map((item) => (
                <div
                  style={{
                    background: '#ff9800',
                    margin: 5
                  }}
                >
                  <div>album id: {item.albumId}</div>
                  <div>{item.title}</div>
                  <div>
                    <img src={item.url} />
                  </div>
                </div>
              ))}
              <span
                style={{
                  position: 'fixed',
                  bottom: 0,
                  padding: 10,
                  background: '#FFF',
                  width: '100%',
                  display: 'flex'
                }}
              >
                <strong>Paginação</strong>
                <div style={{ display: 'flex' }}>
                  <div>
                    <strong>1</strong>
                  </div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
