<template>
    <table>
      <tbody>
        <tr>
          <td>
            <UserAvatar :avatarUrl="user.avatarUrl" />
          </td>
          <td>
            <UserDetails :name="user.name" :email="user.email" />
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import UserAvatar from './UserAvatar.vue';
  import UserDetails from './UserDetails.vue';
  
  export default {
    components: { UserAvatar, UserDetails },
    data() {
      return {
        user: {
          avatarUrl: 'https://via.placeholder.com/50',
          name: 'John Doe',
          email: 'johndoe@example.com'
        }
      };
    }
  }
  </script>
  