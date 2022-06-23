package bukbuk.firstpro.repository;

import bukbuk.firstpro.model.BukMemberDTO;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDAOImpl implements MemberDAO{
    @Override
    public int insertMember(BukMemberDTO dto) {
        return 0;
    }
}
