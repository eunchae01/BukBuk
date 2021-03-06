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

        System.out.println(dto.getMem_phone());

        return insert;
    }

    @Override
    public int deleteMember(int num) {
        return 0;
    }

    @Override
    public void updateSequence(int num) {

    }

    @Override
    public BukMemberDTO getMember(String id) {
        System.out.println("로그인 서비스 호출");

        BukMemberDTO login = dao.getMember(id);

        return login;
    }
}
