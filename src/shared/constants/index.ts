export const MESSAGES = {
  // Sucesso
  SUCCESS_ALBUM_CREATED: "Álbum criado com sucesso!",
  SUCCESS_ALBUM_DELETED: "Álbum deletado com sucesso!",
  SUCCESS_PHOTO: "Foto deletada com sucesso!",
  SUCCESS_PHOTO_CREATED: "Foto criada com sucesso!",
  SUCCESS_PHOTO_UPLOADED: "Foto enviada com sucesso!",
  SUCCESS_LOGIN: "Login realizado com sucesso!",
  SUCCESS_USER_REGISTERED: "Usuário cadastrado com sucesso!",
  SUCCESS_PASSWORD_RESET: "Senha resetada com sucesso!",

  // Informação
  INFO_FILL_ALBUM_NAME: "Por favor, preencha o nome do álbum!",
  INFO_FILL_ALL_FIELDS: "Por favor, preencha todos os campos!",
  INFO_PASSWORD_MISMATCH: "As senhas não coincidem!",
  INFO_SELECT_FILE: "Por favor, selecione um arquivo!",
  INFO_FILE_SELECTED: (filename: string) => `Arquivo selecionado: ${filename}`,

  // Erro
  ERROR_LOAD_ALBUMS: "Erro ao carregar álbuns",
  ERROR_LOAD_PHOTOS: "Erro ao carregar fotos",
  ERROR_CREATE_ALBUM: "Erro ao criar álbum",
  ERROR_DELETE_ALBUM: "Erro ao deletar álbum",
  ERROR_DELETE_PHOTO: "Erro ao deletar foto",
  ERROR_UPLOAD_PHOTO: "Erro ao enviar foto",
  ERROR_LOGIN: "Erro ao fazer login",
  ERROR_REGISTER_USER: "Erro ao cadastrar usuário",
  ERROR_RESET_PASSWORD: "Erro ao resetar senha",
  ERROR_ALBUM_NOT_FOUND: "Álbum não encontrado!",

  // Placeholder
  EMPTY_NO_ALBUMS: "Nenhum álbum encontrado. Crie seu primeiro álbum!",
  EMPTY_NO_PHOTOS: "Nenhuma foto encontrada. Adicione fotos ao seu álbum!",
};

// Rotas da aplicação
export const ROUTES = {
  HOME: "/paginainicial",
  LOGIN: "/",
  REGISTER: "/cadastro",
  RESET_PASSWORD: "/reset_password",
  ALBUM_DETAIL: (uuid: string) => `/album/${uuid}`,
};
