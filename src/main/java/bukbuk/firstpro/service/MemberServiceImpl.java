package bukbuk.firstpro.service;

import bukbuk.firstpro.model.BukMemberDTO;
import bukbuk.firstpro.repository.MemberDAOImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService{
    @Autowired
    MemberDAOImpl dao;

    @Override
    public int insertMember(BukMemberDTO dto) {
        System.out.println("회원가입 서비스 호출");

        int insert = dao.insertMember(dto);

        return insert;
    }

    @Override
    public int deleteMember(int num) {
        return 0;
    }

    @Override
    public void updateSequence(int num) {

    }
}
