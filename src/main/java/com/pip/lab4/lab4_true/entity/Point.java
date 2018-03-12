package com.pip.lab4.lab4_true.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "point", schema = "s225128")//(name="user", schema="s225128")
public class Point {
    @Id
    @GeneratedValue
    private Long id;

    private Double x;

    private Double y;

    private Double r;

    private Boolean status;

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Point() {
    }

    public Point(Double x, Double y, Double r, Boolean status) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.status = status;
    }

    public Point(Double x, Double y, Double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}
