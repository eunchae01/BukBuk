package bukbuk.firstpro.repository;

import bukbuk.firstpro.model.BukMemberDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Repository
public class MemberDAOImpl implements MemberDAO{
    @Autowired
    private JdbcTemplate jdbcTemplate;

    String sql = null;

    @Autowired
    public MemberDAOImpl(DataSource dataSource){
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public int insertMember(BukMemberDTO dto) {
        sql = "select nvl(max(mem_num), 0) from buk_member";

        int max_num = this.jdbcTemplate.queryForObject(sql, Integer.class);

        sql = "insert into buk_member values(?, ?, ?, ?, ?, ?, sysdate, ?)";

        return this.jdbcTemplate.update(sql, new PreparedStatementSetter() {
            @Override
            public void setValues(PreparedStatement ps) throws SQLException {
                ps.setInt(1, max_num + 1);
                ps.setString(2, dto.getMem_name());
                ps.setString(3, dto.getMem_id());
                ps.setString(4, dto.getMem_pwd());
                ps.setString(5, dto.getMem_addr());
                ps.setString(6, dto.getMem_email());
                ps.setString(7, dto.getMem_phone());

                System.out.println(dto.getMem_phone());
            }
        });
    }
}
