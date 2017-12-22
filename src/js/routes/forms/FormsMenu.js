export default function (React, GroupMenuItem, MenuItem) {
  return (
    <GroupMenuItem title="Forms" icon="edit" to="/forms">
      <MenuItem title="General Form" to="/forms/general-form"/>
      <MenuItem title="Form Buttons" to="/forms/form-buttons"/>
    </GroupMenuItem>
  );
};
