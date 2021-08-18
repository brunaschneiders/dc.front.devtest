import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [modalAlbumsActive, setModalAlbumsActive] = useState(null)
  const [modalUserActive, setModalUserActive] = useState(null)
  const [modalPhotosActive, setModalPhotosActive] = useState(false)
  const [idAlbumPhotos, setIdAlbumPhotos] = useState(undefined)
  const [idAlbum, setIdAlbum] = useState(undefined)
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  const [albumsPhotos, setAlbumsPhotos] = useState([])
  const [query, setQuery] = useState('')

  const handleAlbumClick = (param, id) => {
    setModalAlbumsActive(param)
    setIdAlbum(id)
  };

  const handleUserClick = (index) => {
    setModalUserActive(users[index])
  };

  const handlePhotosClick = (param, id) => {
    setModalPhotosActive(param)
    setIdAlbumPhotos(is)
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
    });
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((data) => {
      setAlbums(data)
    });
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => {
      setAlbumsPhotos(data)
    });
  },[])

  
    let photosFiltered = albumsPhotos.filter(
      (item) => item.albumId === idAlbumPhotos
    );
    let albumFiltered = albums.filter(
      (item) => item.userId === idAlbum
    );

    let result = users;
    if (query) {
      const parsedQuery = query.toLowerCase()
      result = users.filter(
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
            onChange={(event) => setQuery(event.target.value)}
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
                    onClick={() => handleUserClick(item.id)}
                  >
                    ver detalhe do usuário
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {modalAlbumsActive && (
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
                setModalAlbumsActive(null)
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
                    onClick={() => handlePhotosClick(true, item.id)}
                  >
                    ver fotos
                  </div>
                  <div>...</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {modalUserActive && (
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
                setModalUserActive(null)
              }
            >
              Fechar
            </span>
            <div>
              <div>{modalUserActive.name}</div>
              <div>{modalUserActive.username}</div>
              <div>{modalUserActive.email}</div>
              <div>{modalUserActive.phone}</div>
              <span
                style={{
                  color: 'blue',
                  textDecoration: 'underline',
                  marginRight: 10,
                  cursor: 'pointer'
                }}
                onClick={() =>
                  handleAlbumClick(true, modalUserActive.id)
                }
              >
                ver álbum
              </span>
            </div>
          </div>
        )}

        {modalPhotosActive && (
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
                setModalPhotosActive(null)
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

export default App;
