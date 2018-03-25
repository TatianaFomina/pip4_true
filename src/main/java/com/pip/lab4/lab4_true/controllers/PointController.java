package com.pip.lab4.lab4_true.controllers;

import com.google.gson.Gson;
import com.pip.lab4.lab4_true.entity.Point;
import com.pip.lab4.lab4_true.repository.PointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


//@Controller
@RestController
public class PointController {

    private PointRepository repository;
    private Gson gson = new Gson();

    @Autowired
    public PointController(PointRepository repository) {
        this.repository = repository;
    }

    /**
     * Returns whether the (x; y) point is inside the area defined by current r
     *
     * @param  stringX                  x parameter
     * @param  stringY                  y parameter
     * @param  stringR                  r parameter
     *
     * @throws NumberFormatException    when any of the {@link String} x, y, r parameters cannot be parsed to
     *                                  {@link Double}
     *
     * @return                          <code>true</code> if the point is in the area
     *                                  <code>false</code> otherwise
     */
    @RequestMapping(value = "/addPoint")
    public Boolean check(@RequestParam("x") String stringX,
                         @RequestParam("y") String stringY,
                         @RequestParam("r") String stringR) throws NumberFormatException {
        Double x = Double.parseDouble(stringX);
        Double y = Double.parseDouble(stringY);
        Double r = Double.parseDouble(stringR);
        if (r < 0){
            x = -x;
            y = -y;
            r = -r;
        }
        boolean result = false;
        if (x <= 0 && y <= 0 && y >= (- r) && x >=(-r / 2)) {
            result = true;
        }
        else if (x >= 0 && y >= 0 && x * x + y * y <= r * r) {
            result = true;
        }
        else if (x >= 0 && y <= 0 && (x - y) <= r) {
            result = true;
        }
        Point point = new Point(x, y, r, result);
        this.repository.save(point);
        return result;
    }
}
