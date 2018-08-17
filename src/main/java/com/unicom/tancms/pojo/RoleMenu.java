package com.unicom.tancms.pojo;

import java.io.Serializable;

public class RoleMenu implements Serializable{
    private Long roleMenuId;

    private Long roleId;

    private Long menuId;

    private Long crudOperation;

    public Long getRoleMenuId() {
        return roleMenuId;
    }

    public void setRoleMenuId(Long roleMenuId) {
        this.roleMenuId = roleMenuId;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getMenuId() {
        return menuId;
    }

    public void setMenuId(Long menuId) {
        this.menuId = menuId;
    }

    public Long getCrudOperation() {
        return crudOperation;
    }

    public void setCrudOperation(Long crudOperation) {
        this.crudOperation = crudOperation;
    }
}