package com.pip.lab4.lab4_true.repository;

import com.pip.lab4.lab4_true.entity.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointRepository extends CrudRepository<Point, Long> {
}
