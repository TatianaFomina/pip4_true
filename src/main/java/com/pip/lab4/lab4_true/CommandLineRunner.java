package com.pip.lab4.lab4_true;


import com.pip.lab4.lab4_true.entity.Point;
import com.pip.lab4.lab4_true.entity.UserAccount;
import com.pip.lab4.lab4_true.repository.PointRepository;
import com.pip.lab4.lab4_true.repository.UserRepository;
import org.springframework.stereotype.Component;


import java.util.stream.Stream;

@Component
public class CommandLineRunner implements org.springframework.boot.CommandLineRunner {

    private final UserRepository repository;
    private final PointRepository point_repository;

    public CommandLineRunner(UserRepository repository, PointRepository point_repository) {
        this.repository = repository;
        this.point_repository = point_repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        // Top beers from https://www.beeradvocate.com/lists/top/
        Stream.of("ksusha", "adminnnn").forEach(name ->
                repository.save(new UserAccount(name))
        );
        this.point_repository.save(new Point(0.0,0.0,0.0, true));
        repository.findAll().forEach(System.out::println);
    }
}