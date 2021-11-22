import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../contexts/AppContext';

export const useUsers = () => {
  const filteredUsers = useContextSelector(
    AppContext,
    (app) => app.filteredUsers
  );
  const activeUser = useContextSelector(AppContext, (app) => app.activeUser);
  const requestUsersList = useContextSelector(
    AppContext,
    (app) => app.requestUsersList
  );
  const onChangeQueryUser = useContextSelector(
    AppContext,
    (app) => app.onChangeQueryUser
  );

  const requestUserDetails = useContextSelector(
    AppContext,
    (app) => app.requestUserDetails
  );

  return {
    filteredUsers,
    activeUser,
    requestUsersList,
    onChangeQueryUser,
    requestUserDetails
  };
};
